const express = require('express');
const { User, userRole, LocationMaster, Budget, Event } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager } = require('../routers/middleware/authMiddleware')


router.post('/save', isAdminOrManager, async (req, res) => {
    try {
        const { budget, requirement, b_event_id } = req.body;
        const newBudget = await Budget.create({
            budget,
            requirement,
            b_event_id // Assuming eventId is passed in the request body
        });
        res.json(new ApiResponse(true, newBudget, "Budget saved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while saving the budget."));
    }
});

router.get('/list', isAdminOrManager, async (req, res) => {
    try {
        const budgets = await Budget.findAll({
            include: { model: Event, as: 'event' } // Include the Events model
        });
        res.json(new ApiResponse(true, budgets, "Budgets retrieved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving budgets."));
    }
});

module.exports = router;