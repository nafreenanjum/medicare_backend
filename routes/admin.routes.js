const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/auth.middleware');
const { registerAdmin, loginAdmin, getAllDoctors, getAllPatients, getAllAppointments, updateDoctorStatus, deleteDoctor, getEmergencyRequests, updateEmergencyRequest, getDashboardStats } = require('../controllers/admin.controller');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/doctors', verifyToken(['admin']), getAllDoctors);

router.get('/patients', verifyToken(['admin']), getAllPatients);
router.get('/appointments', verifyToken(['admin']), getAllAppointments);
router.put('/doctor/:doctorId/status', verifyToken(['admin']), updateDoctorStatus);
router.delete('/doctors/:doctorId', verifyToken(['admin']), deleteDoctor);
router.get('/emergency-requests', verifyToken(['admin']), getEmergencyRequests);
router.patch('/emergency-requests/:requestId', verifyToken(['admin']), updateEmergencyRequest);
router.get('/dashboard-stats', verifyToken(['admin']), getDashboardStats);

module.exports = router;
