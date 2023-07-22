const {Schema, model} = require('mongoose');

const adminAttendanceSchema = new Schema({
    timeLimit:Number,
    
    status: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

})

const AdminAttendance = model('AdminAttendance', adminAttendanceSchema);

module.exports = AdminAttendance;