const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/**
 const qrListSchema = new 
Schema({qrTitle:String,
        dateOfMake:Date,
        dateOfChange:Date,
        point:Number
        qrContent:String })
 **/


const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    qrList:[{qrTitle:String,qrContent:String}]

});

const User = mongoose.model('User', UserSchema);

module.exports = User;