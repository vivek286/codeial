const mongoose = require('mongoose');
const mlter=require('multer');
const path=require('path');
const AVATAR_PATH=path.join('/upload/users/avatars');
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



let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',AVATAR_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });
const User = mongoose.model('User', userSchema);

module.exports = User;