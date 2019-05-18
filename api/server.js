// -- IMPORTS -- //
    const express = require("express")

// -- MIDDLEWARE -- // 
    const helmet = require('helmet')

// -- ROUTERS -- //
    const projectRouter = require('./projectsRouters')
    const actionsRouter = require('./actionsRouter')

// -- SERVER -- //
    const server = express()
    // Set Up Server 
    server.use(express.json())
    server.use(helmet())

// Use Routes
    server.use('/api/projects', projectRouter)
    server.use('/api/actions', actionsRouter)


// EXPORT SERVER
    module.exports = server