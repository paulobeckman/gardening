const express = require('express')
const routes = express.Router()

const ServicesControllers = require('../app/controllers/ServicesControllers')
const SchedulingController = require('../app/controllers/SchedulingController')
const { onlyUsers } = require('../app/middlewares/session')

routes.post('/', onlyUsers, ServicesControllers.post)
routes.get('/', onlyUsers, ServicesControllers.all)
routes.get('/services', onlyUsers, ServicesControllers.findServices)
routes.get('/:id', onlyUsers, ServicesControllers.show)
routes.get('/service/:id', onlyUsers, ServicesControllers.findShow)
routes.post('/scheduling', onlyUsers, SchedulingController.post)

module.exports = routes