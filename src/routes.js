const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const ServiceController = require('./app/controllers/ServiceController')

/**
 * Users
 */
routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

/**
 * Services
 */
routes.get('/services', ServiceController.index)
routes.get('/services/:id', ServiceController.getById)
routes.post('/services', ServiceController.create)

/**
 * Report
 */
routes.get('/report/user/:user', ServiceController.getByUserId)

module.exports = routes
