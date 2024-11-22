const express = require('express');
const { User, userRole, LocationMaster, StateMaster, CityMaster } = require('../models');
const ApiResponse = require('./response/ApiResponse');
const jwt = require('../config/JwtManager');
const router = express.Router();
const { isAdmin, isAdminOrManager } = require('../routers/middleware/authMiddleware')

module.exports = router