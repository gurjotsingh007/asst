const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
        maxLength:[30, "Name should not be more than 30 characters"],
        minLength:[4, "Name should be more than 4 characters"]
    },
    email:{
        type:String,
        required:[true, "Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail, "Please Enter a Valid Email"]
    }, 
    password:{
        type:String,
        required:[true, "Please Enter Your Password"],
        minLength:[8, "Password should have atleast 8 characters"],
        //When accessing the admin panel and click on get all users, it will not show passwords
        // select:false
    },
    avatar:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    role:{
        type:String,
        default:"user"
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,
});

module.exports = mongoose.model("User", userSchema);