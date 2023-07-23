const { Schema, model } = require('mongoose');

const studentAttendanceSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    AdminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendance',
    }

})

const StudentAttendanceSchema = model('studentAttendanceSchema', StudentAttendanceSchema);

module.exports = studentAttendanceSchema;