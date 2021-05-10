const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const session = require('./config/session')

const server = express()

server.use(cors());
server.use(express.urlencoded({extended:true})) // ligado com o req.body
server.use(express.json())

server.use(session)
server.use((req, res, next) => {
    res.locals.session = req.session
    next()
})

server.use(routes)

server.listen(3333, function () {
    console.log("server is running")
})