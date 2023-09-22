const express = require("express");
const path = require("path");
const hbs = require("hbs");
const morgan = require('morgan')
const connectDb = require("./server/database/connection")



const app = express();
const PORT = 3000;

// Mongodb connection
connectDb();

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//log requests
app.use(morgan('tiny'));


// setting view engine 
app.set("view engine", "hbs")

// setting view folder
app.set("views", path.join(__dirname,"views"))

// setting assests folder
app.use('/assests', express.static(path.join(__dirname, 'assests')))
app.use('/images', express.static(path.resolve(__dirname, 'assests/images')))
app.use('/css', express.static(path.resolve(__dirname, 'assests/css')))

// loading routes
app.use('/', require('./server/router/auth'))
app.use('/', require('./server/router/user'))
app.use('/', require('./server/router/posts'))

app.listen(PORT, ()=>{
    console.log(`Server starting on http://localhost:3000`)
})