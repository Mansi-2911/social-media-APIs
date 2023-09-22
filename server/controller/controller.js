const userDb = require('../model/model');
const bcrypt = require('bcrypt');

exports.home = async(req,res) =>{
    res.status(200).send("Welcome to the home Page")
}

exports.create = async(req,res)=>{
    try{
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassowrd = await bcrypt.hash(req.body.password,salt)
        const user = new userDb({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassowrd
        });
        const newUser = await user.save()
        res.status(200).send("Data stored")
    }
    catch(error){
        res.status(400).send(error)
    }
    
}


exports.login = async(req,res)=>{
    try{
        const checkEmail = await userDb.findOne({email:req.body.email})
        !checkEmail && res.status(400).send("Invalid email")

        const checkPassword = await bcrypt.compare(req.body.password,checkEmail.password)
        !checkPassword && res.status(404).send("Wrong Passowrd")
    
        res.status(200).send("Login done")
    }
    catch(error){
    res.status(400).send(error)
    }
}