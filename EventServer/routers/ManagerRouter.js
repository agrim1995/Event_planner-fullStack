const express = require('express');
const { User, userRole } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager } = require('../routers/middleware/authMiddleware')



router.post('/save', isAdmin, async (req, res) => {
    const { name, contact, email, password } = req.body;
    try {
        // Find the "Customer" role
        const managerRole = await userRole.findOne({ where: { rolename: 'Manager' } });
        if (!managerRole) {
            return res.status(404).json(new ApiResponse(false, null, "Manager role not found."));
        }

        // Create a new user with the default role set to "Customer"
        const newUser = await User.create({
            name,
            contact,
            email,
            password,
            user_role_id: managerRole.id
        });

        res.json(new ApiResponse(true, { name, contact, email, userRole: managerRole }, "Registration Success!"));
    } catch (error) {
        console.error(error);
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
        res.status(500).json(new ApiResponse(false, null, "An error occurred during registration."));
    }
});


router.get('/managerslist', isAdmin, async (req, res) => {
    try {
        // Find the "Manager" role
        const managerRole = await userRole.findOne({
            where: { rolename: 'Manager' },
            attributes: ['id', 'rolename'] // Include attributes of user role (rolename)
        });

        if (!managerRole) {
            return res.status(404).json(new ApiResponse(false, null, "Manager role not found."));
        }

        // Find all users with the role of "Manager"
        const managers = await User.findAll({
            where: { user_role_id: managerRole.id },
            attributes: ['id', 'name', 'contact', 'email', 'user_role_id'], // Include attributes of user
            include: [
                {
                    model: userRole,
                    as: 'userRole',
                    attributes: ['id', 'rolename'] // Include attributes of user role (rolename)
                }
            ]
        });

        res.json(new ApiResponse(true, managers, "List of Managers"));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while fetching managers."));
    }
});



// Update Manager API
router.put('/managers/:id', isAdminOrManager, async (req, res) => {
    const managerId = req.params.id;
    const { name, contact, email, password } = req.body;
    try {
        // Find the manager user by ID
        const manager = await User.findByPk(managerId);
        if (!manager) {
            return res.status(404).json(new ApiResponse(false, null, "Manager not found."));
        }

        // Update manager details only if the field is provided in the request body
        if (name !== undefined) manager.name = name;
        if (contact !== undefined) manager.contact = contact;
        if (email !== undefined) manager.email = email;
        if (password !== undefined) manager.password = password;

        // Save the updated manager
        await manager.save();

        res.json(new ApiResponse(true, manager, "Manager details updated successfully."));
    } catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            // Extract validation error messages
            const validationErrors = error.errors.map(err => err.message);
            return res.status(500).json(new ApiResponse(false, null, validationErrors.join(', ')));
        }
    }
});


// Delete Manager API
router.delete('/managers/:id', isAdmin, async (req, res) => {
    const managerId = req.params.id;
    try {
        // Find the manager user by ID
        const manager = await User.findByPk(managerId);
        if (!manager) {
            return res.status(404).json(new ApiResponse(false, null, "Manager not found."));
        }

        // Delete the manager
        await manager.destroy();

        res.json(new ApiResponse(true, { id: managerId }, "Manager deleted successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while deleting manager."));
    }
});


module.exports = router;