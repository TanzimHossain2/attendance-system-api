const StudentAttendance = require('../models/StudentAttendance');
const AdminAttendance = require('../models/AdminAttendance');
const error = require('../utils/error');
const { addMinutes, isAfter } = require('date-fns');

const getAttendance = async (req, res, next) => {
    const { id } = req.params;

    try {

        const adminAttendance = await AdminAttendance.findById(id);

        if (!adminAttendance) {
            throw error('Invalid Attendance ID', 400);
        }

        if (adminAttendance.status === 'COMPLETED') {
            throw error('Attendance already completed');
        }

        let attendance = await StudentAttendance.findOne({
            AdminAttendance: id,
            user: req.user._id,
        });

        if (attendance) {
            throw error('Already registered', 400);
        }

        attendance = new StudentAttendance({
            user: req.user._id,
            AdminAttendance: id,
        });

        await attendance.save();
        return res.status(201).json(attendance);
    } catch (e) {
        next(e);
    }
};




const getAttendanceStatus = async (_req, res, next) => {
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
    getAttendance,
    getAttendanceStatus
};