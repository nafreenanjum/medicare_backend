const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const { createEmergencyRequest } = require('../controllers/emergency.controller');

// POST /api/emergency/request
router.post('/request', verifyToken(['patient']), createEmergencyRequest);

module.exports = router;
