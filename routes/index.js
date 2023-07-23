const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const authenticate = require('../middleware/authentication');
const adminAttendanceRoutes = require('./admin_attendance');
const studentAttendanceRoutes = require('./student-attendance');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', authenticate, userRoutes);
router.use('/api/v1/admin/attendance', authenticate, adminAttendanceRoutes);
router.use('/api/v1/student/attendance', authenticate, studentAttendanceRoutes);



router.get('/health', (_, res) => {
    res.status(200).json({ message: 'Server is up and running' });
});

module.exports = router;