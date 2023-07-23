const mongoose = require('mongoose');
const { model, Schema } = mongoose;

const profileSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {

        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
})

const Profile = model('Profile', profileSchema);
module.exports = Profile;