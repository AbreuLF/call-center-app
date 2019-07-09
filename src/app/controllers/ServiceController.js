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

  async create (req, res) {
    const service = Service.create(req.body)

    return res.json(service)
  }
}

module.exports = new ServiceController()
