const express = require('express');
const { User, userRole, StateMaster } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { Op } = require('sequelize');
const { isAdmin, isAdminOrManager, isAdminOrManagerOrCustomer } = require('./middleware/authMiddleware')


router.post('/save', isAdmin, async (req, res) => {
    const { state_name } = req.body;

    try {
        // Check if the state name is provided
        if (!state_name) {
            return res.status(400).json(new ApiResponse(false, null, "State name is required."));
        }

        // Check if the state name already exists in the StateMaster table
        const existingState = await StateMaster.findOne({ where: { state_name } });
        if (existingState) {
            return res.status(400).json(new ApiResponse(false, null, "State name already exists."));
        }

        // Create the state
        const newState = await StateMaster.create({ state_name });

        // Send success response
        res.status(201).json(new ApiResponse(true, newState, "State added successfully."));
    } catch (error) {
        // Handle errors
        console.error(error);
        if (error.name === 'SequelizeValidationError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        // Generic error message
        res.status(500).json(new ApiResponse(false, null, "An error occurred while saving the state."));
    }
});


  // showing the list
router.get('/list', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        // Fetch all states
        const states = await StateMaster.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });

        res.json(new ApiResponse(true, states, "List of states"));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while fetching states."));
    }
});



// update list
router.put('/:id', isAdmin, async (req, res) => {
    const { state_name } = req.body;
    const stateId = req.params.id;

    try {
        // Check if the state name is provided
        if (!state_name) {
            return res.status(400).json(new ApiResponse(false, null, "State name is required."));
        }

        // Check if the state with the provided ID exists
        const state = await StateMaster.findByPk(stateId);
        if (!state) {
            return res.status(404).json(new ApiResponse(false, null, "State not found."));
        }

        // Check if the new state name already exists for any other state (excluding the current state being updated)
        const existingState = await StateMaster.findOne({ where: { state_name, id: { [Op.ne]: stateId } } });
        if (existingState) {
            return res.status(400).json(new ApiResponse(false, null, "State name already exists for another state."));
        }

        // Update the state name
        state.state_name = state_name;
        await state.save();

        // Send success response
        res.json(new ApiResponse(true, state, "State name updated successfully."));
    } catch (error) {
        // Handle errors
        console.error(error);
        if (error.name === 'SequelizeValidationError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        // Generic error message
        res.status(500).json(new ApiResponse(false, null, "An error occurred while updating the state name."));
    }
});

// delete list

router.delete('/:id', isAdmin, async (req, res) => {
    const stateId = req.params.id;

    try {
        // Check if the state with the provided ID exists
        const state = await StateMaster.findByPk(stateId);
        if (!state) {
            return res.status(404).json(new ApiResponse(false, null, "State not found."));
        }

        // Delete the state
        await state.destroy();

        res.json(new ApiResponse(true, null, "State deleted successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while deleting state."));
    }
});

module.exports = router;

