const AdminAttendance = require('../models/AdminAttendance');
const error = require('../utils/error');
const { addMinutes, isAfter } = require('date-fns');

const getEnable = async (_req, res, next) => {

    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });
        if (running) {
            throw error(400, 'Attendance is already running');
        }

        const attendance = new AdminAttendance({});
        await attendance.save();

        return res.status(201).json({
            message: 'Enable attendance successfully',
            attendance
        });

    } catch (err) {
        next(err);
    }

};
const getDisable = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });

        if (!running) {
            throw error(400, 'Attendance is not running');
        }

        running.status = 'COMPLETED';
        await running.save();

        return res.status(200).json({
            message: 'Disable attendance successfully',
            running
        });


    } catch (err) {
        next(err);
    }
};

const getStatus = async (_req, res, next) => {
    try {
        const running = await AdminAttendance.findOne({ status: 'RUNNING' });

        if (!running) {
            throw error(400, 'Attendance is not running');
        }

        const started = addMinutes(new Date(running.createdAt), running.timeLimit);

        if (isAfter(new Date(), started)) {
            running.status = 'COMPLETED';
            await running.save();
        }

        return res.status(200).json({ running });

    } catch (err) {
        next(err);
    }
};


module.exports = {
    getEnable,
    getDisable,
    getStatus
}