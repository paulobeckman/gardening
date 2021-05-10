const express = require('express')
const routes = express.Router()

const SessionController = require('../app/controllers/SessionController')
const UserController = require('../app/controllers/UserController')
const SignInController = require('../app/controllers/SignInController')

const UserValidator = require('../app/validators/user')
const SessionValidator = require('../app/validators/session')

const { onlyUsers } = require('../app/middlewares/session')

// login/logout
routes.post('/login',SessionValidator.login, SessionController.login)
routes.post('/logout', SessionController.logout)

//user register UserController
routes.post('/register', UserValidator.post, UserController.post)

//Confirm Login
routes.get('/registered', onlyUsers ,SignInController.SignIn)

module.exports = routes