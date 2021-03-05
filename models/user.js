const mongoose = require('mongoose');
const mlter=require('multer');
const path=require('path');
cont AVATAR_PATH=path.join('/upload/users/avatars');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
    ,
    avatar:{
        type:String,
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;