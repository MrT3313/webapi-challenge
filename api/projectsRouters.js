// IMPORTS
const express = require('express');

// Importing Models for DB
    const Projects = require('../data/helpers/projectModel');

// Router
    const router = express.Router();

// - GET - //
    router.get("/", async (req, res) => {
        console.log("projectsRouter GET/ ")
        try {
            console.log("HELLO")

            const projects = await Projects.get()
            console.log(projects)

            res.status(200).json(projects)
        } catch (err) {
            res
                .status(500)
                .json({ error: 'The projects information could not be found'})
        }
    });
    router.get("/:id", async (req, res) => {
        console.log("projectsRouter GET/:id ")
        const { id } = req.params
        try {
            const project = await Projects.get(id)
            res.status(200).json(project)
        } catch (err) {
            res
                .status(500)
                .json({ error: `The project information for id# ${id} could not be found`})
        }
    });
// - POST - //

// - PUT - //

// - DELETE - //

// EXPORTS
    module.exports = router