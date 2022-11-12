const Task = require('../../models/taskSchema')

async function createTask(req,res) {
    try {
        //add the task to DB
        const task = await Task.createTask(req.body)
        //send back a string
        res.json(task)
    } catch(err) {
        res.status(400).json(err)
    }
}

module.exports = createTask