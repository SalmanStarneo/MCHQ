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
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedPassword =>{
                    const newUser = new User({
                        name,
                        email,
                        password: hashedPassword,
                        dateOfBirth
                    });
                    
                    newUser.save().then(result => {
                        res.json({
                            status:"PASS",
                            message: "Sign Up Successful",
                            data: result
                        })
                    }).catch(err => {
                        res.json({
                            status: "FAIL",
                            message: "Error happened while saving the account"
                        })
                    })

                }).catch(err => {
                res.json({
                status: "FAIL",
                message: "Error happened while hashing password"
            })
        })
            }
        }).catch(err => {
            res.json({
                status: "FAIL",
                message: "Error happened while checking for users"
            })
        })

    }
})

router.post('/login', (req,res) => {
    let {email,password} = req.body;
    email=email.trim();
    password=password.trim();

    if(email == ""||password == "")
    {
        res.json({
            status: "FAIL",
            message: "empty input fields!!"
        })
    }
    else{
        User.find({email}).then(data => {

            if(data.length){
                const hashedPassword = data[0].password;
                bcrypt.compare(password,hashedPassword).then(result => {
                    if(result){
                        res.json({
                            status:"PASS",
                            message:"Login done!",
                            data:data
                        })
                    }else{

                        res.json({
                            status:"FAIL",
                            message:"Invalid password entry!"
                        })
                    }
                }).catch((err) => {
                    res.json({
                        status:"FAIL",
                        message:"Password comparison error has occurred!"
                    })
                })
            }else{

                res.json({
                    status:"FAIL",
                    message:"Invalid inputs!"
                })
            }
        }).catch((err) => {
            res.json({
                status:"FAIL",
                message:"error has occurred while checking for the account!"
            })
        })
    }
})

// push the user inputs into the sub document and display it back as QR code
router.post('/generateQR', (req,res) => {
    let {qrTitle,qrContent,email} = req.body;
    email=email.trim();
    qrTitleInput=qrTitle.trim();
    qrContentInput=qrContent.trim();    

    if(qrTitle == ""||qrContent == "")
    {
        res.json({
            status: "FAIL",
            message: "empty input fields!!"
        })
    }else if(!/^[a-zA-Z]*$/.test(qrTitle))
    {
        res.json({
            status: "FAIL",
            message: "Wrong Type fields!!"
        })     
    }
    else{
        //create new user qr code item
        User.findOne({email}).then((listResult) =>{
            console.log(listResult);
            listResult.qrList.push({qrTitle:qrTitleInput, qrContent:qrContentInput});
            listResult.save().then((data) => {
                res.json({
                    status: "PASS",
                    message: "WORKED!!",
                    data:data
                })
            }
            );

        }).catch((err) =>{
            res.json({
                status: "FAIL",
                message: "Error!!: "+err
            })
        })

    }
})

// get information from the user's sub document 
router.get('/ListQR', (req,res) => {
    let email = req.query.email;
 
    User.findOne({email}).populate("qrList").then((listResult) =>{
        if(listResult){
            res.json({
                data:listResult
            })
            console.log(listResult+ " DB");
        }
    }).catch((err) =>{
        res.json({
            status: "FAIL",
            message: "Error!!: "+err
        })
    })

    
})

module.exports = router;