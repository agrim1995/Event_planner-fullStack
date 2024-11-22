const express = require('express');
const { User, userRole, LocationMaster, StateMaster, CityMaster } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager } = require('../routers/middleware/authMiddleware')

router.post('/save', isAdminOrManager, async (req, res) => {
    try {
        const { location_name, location_address, location_state_id, location_city_id } = req.body;
        const location = await LocationMaster.create({
        location_name,location_address,location_state_id,location_city_id});
        res.json(new ApiResponse(true, location, "Location added successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while adding the location."));
    }
});

router.get('/list', isAdminOrManager, async (req, res) => {
    try {
        const locations = await LocationMaster.findAll({
            include: [
                { model: StateMaster, as: 'state' },
                { model: CityMaster, as: 'city' }
            ]
        });
        res.json(new ApiResponse(true, locations, "Locations retrieved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving locations."));
    }
});


//update Location

router.put('/:id', isAdmin, async (req, res) => {
    const locationId = req.params.id;
    const { location_name } = req.body;

    try {
        // Find the Location by ID
        const location = await LocationMaster.findByPk(locationId);
        if (!location) {
            return res.status(404).json(new ApiResponse(false, null, "Location not found."));
        }

        // Check if the Location name already exists
        const existingLocation = await LocationMaster.findOne({ where: { location_name } });
        if (existingLocation && existingLocation.id !== locationId) {
            return res.status(400).json(new ApiResponse(false, null, "This Location already exists. Please try another Location name."));
        }

        // Update Location details
        location.location_name = location_name;

        // Save the updated Location
        await location.save();

        res.json(new ApiResponse(true, location, "Location details updated successfully."));
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        res.status(500).json(new ApiResponse(false, null, "An error occurred while updating Location details."));
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



module.exports = router