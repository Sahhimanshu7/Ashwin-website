const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newBlogSchema= new Schema({
    title : {
        type : String,
        required : true,
        minlength: 3,

    },
   

    
    writerName: {
        type: String,
        required: true,
        minlength: 3,
    },
    paragraph: {
        type: String,
        required: true,
        minlength: 20,
    },
    tags: {
        type: String,
        required: true,
        minlength: 1,
    },
    catagories: {
        type: String,
        required: true,
        minlength: 1,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    },
}, {
    timestamps: true
});

const NewBlog = mongoose.model('NewBlog', newBlogSchema);

module.exports = NewBlog;