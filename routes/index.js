const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const authenticate = require('../middleware/authentication');

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users',authenticate, userRoutes);



router.get('/health', (_, res) => {
    res.status(200).json({ message: 'Server is up and running' });
});

module.exports = router;