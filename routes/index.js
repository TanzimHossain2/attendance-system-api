const router = require('express').Router();
const authRoutes = require('./auth');

router.use('/api/v1/auth', authRoutes);


router.get('/health', (_, res) => {
    res.status(200).json({ message: 'Server is up and running' });
});

module.exports = router;