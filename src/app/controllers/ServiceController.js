const mongoose = require('mongoose')
const Service = require('../models/Service')
class ServiceController {
  async index (req, res) {
    const services = await Service.find()

    return res.json(services)
  }

  async getById (req, res) {
    const service = await Service.findById(req.params.id)

    return res.json(service)
  }

  async getByUserId (req, res) {
    if (!req.params.user) {
      return res.status(400).json({ error: 'User is required' })
    }

    if (!mongoose.Types.ObjectId.isValid(req.params.user)) {
      return res.status(400).json({ error: 'User is invalid' })
    }

    const services = await Service.find({ user: req.params.user }).populate('User')

    return res.json(services)
  }

  async create (req, res) {
    const service = Service.create(req.body)

    return res.json(service)
  }
}

module.exports = new ServiceController()
