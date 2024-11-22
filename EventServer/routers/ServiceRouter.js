const express = require('express');
const { User, userRole, LocationMaster, ServiceMaster } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager } = require('../routers/middleware/authMiddleware')


router.post('/save', isAdminOrManager, async (req, res) => {
    try {
        const { service_name, service_desc } = req.body;
        const service = await ServiceMaster.create({
            service_name,
            service_desc
        });
        res.json(new ApiResponse(true, service, "Service added successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while adding the service."));
    }
});

// API to get a list of all services (accessible by admin or manager)
router.get('/list', isAdminOrManager, async (req, res) => {
    try {
        const services = await ServiceMaster.findAll();
        res.json(new ApiResponse(true, services, "Services retrieved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving services."));
    }
});



//update service
router.put('/:id', isAdmin, async (req, res) => {
    const serviceId = req.params.id;
    const { service_name ,service_desc} = req.body;

    try {
        // Find the event by ID
        const service = await ServiceMaster.findByPk(serviceId);
        if (!service) {
            return res.status(404).json(new ApiResponse(false, null, "Service not found."));
        }

        // Check if the Service name already exists
        const existingservice = await ServiceMaster.findOne({ where: { service_name ,service_desc} });
        if (existingservice && existingservice.id !== serviceId) {
            return res.status(400).json(new ApiResponse(false, null, "This Service already exists. Please try another Service name."));
        }

        // Update event details
        service.service_name = service_name;
        service.service_desc = service_desc;


        // Save the updated event
        await service.save();

        res.json(new ApiResponse(true, ServiceMaster, "Service details updated successfully."));
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        res.status(500).json(new ApiResponse(false, null, "An error occurred while updating Service details."));
    }
});



// Delete service API by Admin
router.delete('/delete/:id', isAdmin, async (req, res) => {
    const serviceId = req.params.id;

    try {
        // Find the event by ID
        const service = await ServiceMaster.findByPk(serviceId);
        if (!service) {
            return res.status(404).json(new ApiResponse(false, null, "service not found."));
        }

        // Delete the service
        await service.destroy();

        res.json(new ApiResponse(true, null, "service deleted successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while deleting service."));
    }
});


module.exports = router