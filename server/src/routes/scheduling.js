const express = require('express')
const routes = express.Router()

const SchedulingController = require('../app/controllers/SchedulingController')
const { onlyUsers } = require('../app/middlewares/session')

routes.get('/', onlyUsers, SchedulingController.index)
routes.get('/schedules', onlyUsers, SchedulingController.schedules)
routes.post('/', onlyUsers, SchedulingController.post)

module.exports = routes