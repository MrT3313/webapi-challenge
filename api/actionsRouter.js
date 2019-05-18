// IMPORTS
    const express = require('express');

// Importing Models for DB
const Actions = require('../data/helpers/actionModel');

// Router
    const router = express.Router();

// - GET - //
    router.get("/", async (req, res) => {
        console.log("actionsRouter GET/ ")
        // TEST
            // res.json({ message: "THE GET WORKED!"})

        try {
            const actions = await Actions.get()
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
            const action = await Actions.get(id)
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