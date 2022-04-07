const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSignUpSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },
    imageUrl: {
        type: String,
        required: true

    },

}, {
    timestamps: true
});

const UserSignUp = mongoose.model('UserSignUp', userSignUpSchema);

module.exports = UserSignUp;