const express = require('express');
const { User, userRole, LocationMaster, Budget, Event, Enquiry } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager, isCustomer, isAdminOrManagerOrCustomer } = require('../routers/middleware/authMiddleware')





router.get('/list', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        // Fetch all enquiries and include related event data
        const enquiries = await Enquiry.findAll({
            include: { model: Event, as: 'event' }
        });

        // Return a success response with the retrieved enquiries
        res.json(new ApiResponse(true, enquiries, "Enquiries retrieved successfully."));
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving enquiries."));
    }
});







module.exports = router