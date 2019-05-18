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
    router.post("/:id", async (req,res) => {
        console.log("actionsRouter POST/:id")
        const { id } = req.params
        const action = req.body
            action.project_id = parseInt(id)
            console.log(action)
        try {
            const newAction = await Actions.insert(action)
            if (newAction) {
                res.status(201).json(newAction)
            } else {

                res.status(400).json({ message: "please fix shape of newAction"})
            }
        } catch {
            res
                .status(500)
                .json({ error: `Could not POST item`})
        }
    })

// - PUT - //
    router.put("/:id", async (req, res) => {
        const { id } = req.params
        console.log("actionsRouter PUT/:id")
        console.log("REQ.body", req.body)
        console.log("ID", id)
        try {
            const editAction = await Actions.update(id, req.body)
            res.status(200).json(editAction)
        } catch {
            res.status(500).json({ error: `Could not UPDATE item ${id}`})
        }
    })

// - DELETE - //

// EXPORTS
    module.exports = router