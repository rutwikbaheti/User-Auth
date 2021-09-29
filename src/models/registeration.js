const mongoose = require("mongoose");
const express = require("express");

const userSchema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    email : {
        type :String,
        required : true,
        unique : true
    },
    password :{
        type : String,
        required : true
    },
    dob : {
        type : Date,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
})

const Register = new mongoose.model("Register", userSchema);
module.exports = Register;