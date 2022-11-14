const Task = require('../../models/taskSchema')

async function createTask(req, res) {
    try{
        const newTask = new Task({
            title: req.body.title,
            completed: req.body.completed,
            user: req.user.id
        });
        const savedTask = await newTask.save()
        return res.status(201).json(savedTask)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getAllTask (req, res) {
    
}

module.export = {
    createTask,
    getAllTask
}