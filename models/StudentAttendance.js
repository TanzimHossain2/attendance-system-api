const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema({

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    AdminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance',
        required: true
    }

}, { timestamps: true })

const StudentAttendance = model('studentAttendance', studentAttendanceSchema);

module.exports = StudentAttendance;