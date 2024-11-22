const express = require('express');
const { Event } = require('../models'); // Import the Event model
const ApiResponse = require('./response/ApiResponse');
const { isAdmin, isAdminOrManagerOrCustomer } = require('../routers/middleware/authMiddleware'); // Import isAdmin middleware
const router = express.Router();

router.post('/save', isAdmin, async (req, res) => {
    const { event_name } = req.body;

    try {
        // Check if the event name is provided
        if (!event_name) {
            return res.status(400).json(new ApiResponse(false, null, "Event name is required."));
        }

        // Create the event
        const newEvent = await Event.create({ event_name });

        res.status(201).json(new ApiResponse(true, newEvent, "Event added successfully."));
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        res.status(500).json(new ApiResponse(false, null, "An error occurred during registration."));
    }
});

router.get('/list', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        // Fetch all events
        const events = await Event.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

        res.json(new ApiResponse(true, events, "List of events"));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while fetching events."));
    }
});

//update Event

router.put('/:id', isAdmin, async (req, res) => {
    const eventId = req.params.id;
    const { event_name } = req.body;

    try {
        // Find the event by ID
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json(new ApiResponse(false, null, "Event not found."));
        }

        // Check if the event name already exists
        const existingEvent = await Event.findOne({ where: { event_name } });
        if (existingEvent && existingEvent.id !== eventId) {
            return res.status(400).json(new ApiResponse(false, null, "This event already exists. Please try another event name."));
        }

        // Update event details
        event.event_name = event_name;

        // Save the updated event
        await event.save();

        res.json(new ApiResponse(true, event, "Event details updated successfully."));
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        res.status(500).json(new ApiResponse(false, null, "An error occurred while updating event details."));
    }
});

// Delete Event API by Admin
router.delete('/delete/:id', isAdmin, async (req, res) => {
    const eventId = req.params.id;

    try {
        // Find the event by ID
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json(new ApiResponse(false, null, "Event not found."));
        }

        // Delete the event
        await event.destroy();

        res.json(new ApiResponse(true, null, "Event deleted successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while deleting event."));
    }
});

module.exports = router;
