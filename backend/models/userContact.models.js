const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userContactSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim: true,
        minlength: 3,
    },
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    number : {
        type: String,
        required: true,
        // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    message : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },

}, {
    timestamps: true
});

const UserContact = mongoose.model('UserContact', userContactSchema);

module.exports = UserContact;