const express = require('express')
const routes = express.Router()

const users = require('./users')
const services = require('./services')
const scheduling = require('./scheduling')

routes.use('/users', users)
routes.use('/services', services)
routes.use('/scheduling', scheduling)

module.exports = routes