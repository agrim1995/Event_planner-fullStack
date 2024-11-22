const express = require('express');
const { User, userRole, StateMaster, CityMaster } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { Op } = require('sequelize');
const { isAdmin, isAdminOrManager, isAdminOrManagerOrCustomer } = require('./middleware/authMiddleware')

router.post('/save', isAdmin, async (req, res) => {
    const { city_name, city_state_id } = req.body;

    try {
        // Check if the city name and state ID are provided
        if (!city_name || !city_state_id) {
            return res.status(400).json(new ApiResponse(false, null, "City name and state ID are required."));
        }

        // Check if the state with the provided ID exists
        const state = await StateMaster.findByPk(city_state_id);
        if (!state) {
            return res.status(404).json(new ApiResponse(false, null, "State not found."));
        }

        // Check if the city already exists for the same state
        const existingCity = await CityMaster.findOne({ where: { city_name, city_state_id } });
        if (existingCity) {
            return res.status(400).json(new ApiResponse(false, null, "City already exists for the same state."));
        }

        // Create the city
        const newCity = await CityMaster.create({ city_name, city_state_id });

        // Send success response
        res.status(201).json(new ApiResponse(true, newCity, "City added successfully."));
    } catch (error) {
        // Handle errors
        console.error(error);
        if (error.name === 'SequelizeValidationError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        // Generic error message
        res.status(500).json(new ApiResponse(false, null, "An error occurred while saving the city."));
    }
});

router.get('/list', isAdminOrManagerOrCustomer, async (req, res) => {
    try {
        // Fetch all cities with associated state names
        const cities = await CityMaster.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            include: [{
                model: StateMaster,
                as: 'state',
                attributes: ['id', 'state_name']
            }]
        });

        // Send response
        res.json(new ApiResponse(true, cities, "List of cities with associated state names."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while fetching cities."));
    }
});


router.delete('/:id', isAdmin, async (req, res) => {
    const cityId = req.params.id;

    try {
        // Check if the city exists
        const city = await CityMaster.findByPk(cityId);
        if (!city) {
            return res.status(404).json(new ApiResponse(false, null, "City not found."));
        }

        // Delete the city
        await city.destroy();

        // Send success response
        res.json(new ApiResponse(true, null, "City deleted successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while deleting the city."));
    }
});



module.exports = router