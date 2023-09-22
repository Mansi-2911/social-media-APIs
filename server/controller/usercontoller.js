const userDb = require('../model/model');
const bcrypt = require('bcrypt');


//update user
exports.update = async(req,res) =>{
if(req.body.userId === req.params.id  || req.body.isAdmin){
    if(req.body.password) {
    try{
       const salt = await bcrypt.genSalt(10)
       const hashedPassowrd = await bcrypt.hash(req.body.password, salt)
     }
     catch(error){
        res.status(500).send(error)
     }
    }
    try{
        const user = await userDb.findByIdAndUpdate(req.params.id , {
            $set:req.body,
        });
        res.status(200).send("account has been updated")
    }
    catch(error){
        res.status(500).send(error)
     }  
}  
else{
    res.status(404).send("You can only update your account")
}
}

//delete an user
exports.delete = async(req,res) =>{
    if(req.body.userId === req.params.id  || req.body.isAdmin){
        try{
             await userDb.findByIdAndDelete(req.params.id);
            res.status(200).send("account has been deleted")
        }
        catch(error){
            res.status(500).send(error)
         }  
    }  
    else{
        res.status(404).send("You can only delete your account")
    
    }
}



