
const express = require('express')
const route = express.Router()
const usercontroller = require('../controller/usercontoller')

route.put('/login/:id', usercontroller.update)
route.delete('/login/:id', usercontroller.delete)

module.exports = route;
