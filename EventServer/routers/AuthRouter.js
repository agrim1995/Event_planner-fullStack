const express = require('express');
const { User, userRole, Event, StateMaster, CityMaster, LocationMaster, ServiceMaster, Budget, Enquiry } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: { email, password },
            include: [
                {
                    model: userRole,
                    attributes: { exclude: ['createdAt', 'updatedAt'] } // Exclude createdAt and updatedAt
                }
            ]
        });
        if (!user) {
            res.status(401).json(new ApiResponse(false, null, "Invalid Id or Password!"));
        } else {
            const { id, name, contact, email, userRole } = user;
            const token = jwt.generateAccessToken(user.id);
            res.json(new ApiResponse(true, { id, name, contact, email, userRole, token }, "Login Success!"));
        }
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred during login."));
    }
});


// Registration API endpoint


router.post('/registerAdmin', async (req, res) => {
    const { name, contact, email, password } = req.body;
    try {
        // Find the "Admin" role
        const AdminRole = await userRole.findOne({ where: { rolename: 'Admin' } });
        if (!AdminRole) {
            return res.status(404).json(new ApiResponse(false, null, "Admin role not found."));
        }

        // Create a new user with the default role set to "Admin"

        const newUser = await User.create({
            name,
            contact,
            email,
            password,
            user_role_id: AdminRole.id // Set the user_role_id to the ID of the "Admin" role
        });


 res.json(new ApiResponse(true,{ name, contact, email, userRole: AdminRole },"Registration Success!"));
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




router.post('/registercustomer', async (req, res) => {
    const { name, contact, email, password } = req.body;
    try {
        // Find the "Customer" role
        const customerRole = await userRole.findOne({ where: { rolename: 'Customer' } });
        if (!customerRole) {
            return res.status(404).json(new ApiResponse(false, null, "Customer role not found."));
        }

        // Create a new user with the default role set to "Customer"
        const newUser = await User.create({
            name,
            contact,
            email,
            password,
            user_role_id: customerRole.id // Set the user_role_id to the ID of the "Customer" role
        });


    res.json(new ApiResponse(true, { name, contact, email, userRole: customerRole }, "Registration Success!"));
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




router.post('/registermanager', async (req, res) => {
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



// Events For All Users


router.get('/events/list', async (req, res) => {
    try {
        // Fetch all events
        const events = await Event.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });

        res.json(new ApiResponse(true, events, "List of events"));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while fetching events."));
    }
});

// state list for all users
router.get('/state/list', async (req, res) => {
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


router.get('/city/list', async (req, res) => {
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


router.get('/location/list', async (req, res) => {
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


router.get('/servicemaster/list', async (req, res) => {
    try {
        const services = await ServiceMaster.findAll();
        res.json(new ApiResponse(true, services, "Services retrieved successfully."));
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while retrieving services."));
    }
});


router.get('/budget/list', async (req, res) => {
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



// enquiry save

router.post('/enquiry/save', async (req, res) => {
    try {
        // Destructure the request body to extract enquiry data
        const { enq_name, enq_contact, alt_contact, event_date, email, enq_event_id, enq_msg } = req.body;

        // Validate the incoming data (optional)
        // You can perform validation using libraries like Joi or implement custom validation logic

        // Create the enquiry in the database using Sequelize
        const enquiry = await Enquiry.create({
            enq_name,
            enq_contact,
            alt_contact,
            event_date,
            email,
            enq_event_id,
            enq_msg
        });

        // Return a success response with the created enquiry data
        res.json(new ApiResponse(true, enquiry, "Enquiry saved successfully."));
    } catch (error) {
        // Handle any errors that occur during the process
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred while saving the enquiry."));
    }
});
module.exports = router;
