const express = require('express');
const { User, userRole, Event, StateMaster, CityMaster, LocationMaster, ServiceMaster, Budget, Booking, Enquiry } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const { isAdminOrManager, isAdminOrManagerOrCustomer } = require('./middleware/authMiddleware');

const router = express.Router();

router.post('/save', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        const {
            booking_event_id,
            no_of_days,
            budget,
            booking_location_id,
            event_date,
            event_time,
            booking_enquiry_id,
            booking_user_manager_id
        } = req.body;

        // Create the booking
        const booking = await Booking.create({
            booking_event_id,
            no_of_days,
            budget,
            booking_location_id,
            event_date,
            event_time,
            booking_enquiry_id,
            booking_user_manager_id
        });

        res.json(new ApiResponse(true, booking, "Booking created successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while creating the booking."));
    }
});


router.get('/list', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [
                {
                    model: Event,
                    as: 'event', // Specify the alias for the association
                    attributes: ['id', 'event_name', 'createdAt', 'updatedAt']
                },
                {
                    model: LocationMaster,
                    as: 'location',
                    attributes: ['id', 'location_name', 'location_address']
                },
                {
                    model: Enquiry,
                    as: 'enquiry',
                    attributes: ['id', 'enq_name', 'enq_contact', 'alt_contact', 'email', 'enq_msg', 'event_date']
                }
            ]
        });
        res.json(new ApiResponse(true, bookings, "Booking list retrieved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving the booking list."));
    }
});
module.exports = router