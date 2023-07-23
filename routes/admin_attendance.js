const router = require('express').Router();
const attendance = require('../controller/admin-attendance');

router.get('/enable',attendance.getEnable);
router.get('/disable',attendance.getDisable);
router.get('/status',attendance.getStatus);


module.exports = router;