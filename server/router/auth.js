const express = require('express')

const services = require('../services/render')
const controller = require('../controller/controller')
const route = express.Router();



route.get('/', services.home)
route.get('/login', services.login)
route.get('/signup', services.signup)

route.post('/login',controller.login)
route.post('/signup',controller.create)


module.exports = route;