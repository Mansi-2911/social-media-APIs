exports.home = (req,res) =>{
    res.send("Welcome to home page ")
}


exports.login = (req,res)=>{
    res.status(200).send("Welcome to login page ")
}

exports.signup = (req,res)=>{
    res.status(200).send("Welcome to signup page ")
}