// IMPORTS
    const express = require('express');

// DataBase
    const db = require('../data/dbConfig');

// Router
    const router = express.Router();

// - GET - //
    router.get("/", async (req, res) => {
        console.log("actionsRouter GET/ ")
        try {
            const actions = await db.get()
            res.status(200).json(actions)
        } catch (err) {
            res
                .status(500)
                .json({ error: 'The actions information could not be found'})
        }
    });
    router.get("/:id", async (req, res) => {
        console.log("actionsRouter GET/:id ")
        const { id } = req.params
        try {
            const action = await db.get(id)
            res.status(200).json(action)
        } catch (err) {
            res
                .status(500)
                .json({ error: `The action information for id# ${id} could not be found`})
        }
    });
// - POST - //

// - PUT - //

// - DELETE - //

// EXPORTS
    module.exports = router