const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type:String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: [String],
    accountStatus : {
        type: String,
    }
})

const User = model('User', userSchema);
module.exports = User;