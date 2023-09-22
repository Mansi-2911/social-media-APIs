const mongoose = require("mongoose");

const connectDb = async() =>{
    try{
        const conn = await mongoose.connect("mongodb://0.0.0.0:27017/task2Db")
        console.log("MongoDb Database connected");
    }
    catch(error){
        console.log(`Connection Failed due to error : {error}`)
    }
}

module.exports = connectDb;