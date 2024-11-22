const { User } = require('../../models');
const ApiResponse = require('../response/ApiResponse');

const isAdmin = async (req, res, next) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.user;
        //console.log("Extracted userId from JWT:", req.user);

        // Find the user by ID
        const user = await User.findByPk(userId);

        // Check if the user exists and has the role of an admin
        if (!user || user.user_role_id !== 1) {
            return res.status(403).json(new ApiResponse(false, null, "Access denied. ! You are not authorised to perform this action."));
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred."));
    }
};

const isAdminOrManager = async (req, res, next) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.user;
        const managerId = parseInt(req.params.id); // Parse the managerId to ensure it's a number

        // Find the user by ID
        const user = await User.findByPk(userId);

        // Check if the user exists and has the role of an admin or if they are the manager themselves
        if (!user || (user.user_role_id !== 1 && userId !== managerId)) {
            return res.status(403).json(new ApiResponse(false, null, "Access denied! You are not authorized to perform this action."));
        }

        // If the user is an admin or themselves, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred."));
    }
};


const isAdminOrManagerOrCustomer = async (req, res, next) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.user;

        // Fetch the user from the database to get their role ID
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(403).json(new ApiResponse(false, null, "Access denied! User not found."));
        }

        // Get the user's role ID
        const userRoleId = user.user_role_id;


        if (![1, 2, 3].includes(userRoleId)) {
            return res.status(403).json(new ApiResponse(false, null, "Access denied! You are not authorized to perform this action."));
        }

        req.userRoleId = userRoleId; // Store the user's role ID in the request object for later use
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred."));
    }
};


const isCustomer = async (req, res, next) => {
    try {
        // Extract the user ID from the JWT token
        const userId = req.user;

        // Find the user by ID
        const user = await User.findByPk(userId);

        // Check if the user exists and has the role of an admin
        if (!user || user.user_role_id !== 3) {
            return res.status(403).json(new ApiResponse(false, null, "Access denied ! You are not authorised to perform this action."));
        }

        // If the user is an admin, proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json(new ApiResponse(false, null, "An error occurred."));
    }
};


module.exports = { isAdmin, isAdminOrManager, isAdminOrManagerOrCustomer, isCustomer };