const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const adminLoginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    },

}, {
    timestamps: true
});

const AdminLogin = mongoose.model('adminLogin', adminLoginSchema);

module.exports = AdminLogin;