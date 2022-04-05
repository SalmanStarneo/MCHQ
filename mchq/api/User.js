const express = require('express');
const router = express.Router();

//mongoDB user model
const User = require('../models/User');

// password handler
const bcrypt = require('bcrypt');

router.post('/signup', (req,res) => {
    let {name,email,password,dateOfBirth} = req.body;
    name=name.trim();
    email=email.trim();
    password=password.trim();
    dateOfBirth=dateOfBirth.trim();

    if(name == ""|| email == ""||password == ""|| dateOfBirth == "")
    {
        res.json({
            status: "FAIL",
            message: "empty input fields!!"
        })
    } else if(!/^[a-zA-Z]*$/.test(name)){
        res.json({
            status: "FAIL",
            message: "Invalid username entry!!"
        })
    }else if(!/^[\w\.]+@([\w.]+\.)+[\w.]*$/.test(email)){
        res.json({
            status: "FAIL",
            message: "Invalid email entry!!"
        })
    }else if(!new Date(dateOfBirth).getTime()){
        res.json({
            status: "FAIL",
            message: "Invalid date entry!!"
        })
    }else if(password.length < 8){
        res.json({
            status: "FAIL",
            message: "Short Password entry!!"
        })
    } else{
        //check for existing users
        User.find({email}).then(results => {
            if(results.length){
                req.json({
                    status: "FAIL",
                    message: "This email already used by a user!"
                })
            } else {
                //create new user
            }
        }).catch(err => {
            res.json({
                status: "FAIL",
                message: "Error happened while checking for users"
            })
        })

    }
})

router.post('/signin', (req,res) => {


})

module.exports = router;