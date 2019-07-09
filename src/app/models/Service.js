const mongoose = require('mongoose')

const ServiceSchema = new mongoose.Schema({
  startedAt: {
    type: Date,
    required: true
  },
  finishedAt: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Service', ServiceSchema)
