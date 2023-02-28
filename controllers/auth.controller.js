const e = require('express');
const jwt = require('jsonwebtoken');
const userSchema = require('./../models/db.model');


 exports.signup = async function(req,res){
    try{
        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let email = req.body.email;
        let password = req.body.password;
        // let Contact = req.body.Contact;
        let User = await userSchema.create({
            firstname,
            lastname,
            email,
            password
            // Contact
        })
        return res.status(200).json({
            message: "Successfully Added",
            User
        })
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

exports.login =async function (req,res){
    let data = req.body;
    let email = data.email;
    let password = data.pass;

    let login = await userSchema.findOne({email:email,password:password})
    var token = jwt.sign({ email: email }, 'shhhhh');

        return res.status(200).json({
            message:"successfull login ",
            token
        })
    }