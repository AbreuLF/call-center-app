const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const config = require('./config/database')

class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'

    this.database()
    this.middlewares()
    this.routes()
  }

  database () {
    mongoose.connect(config.database_uri, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new App().express
