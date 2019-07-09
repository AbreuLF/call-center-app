const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const ServiceController = require('./app/controllers/ServiceController')

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)
routes.get('/services', ServiceController.index)
routes.post('/services', ServiceController.create)

module.exports = routes
