const Task = require('../../models/taskSchema')

async function createTask(req, res) {
    try{
        const newTask = new Task({
            title: req.body.title,
            email: req.body.email,
            completed: req.body.completed
        });
        const saveTask = await newTask.save()
        return res.status(200).json(saveTask)
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getAllTasks (req, res) {
    try {
        const allTasks = await Task.find({})
        return res.status(200).json(allTasks)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function currentTasks (req, res) {
    try {
        const currTasks = await Task.findOne({ email: req.body.email })
        return res.status(200).json(currTasks)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function updateTask (req, res) {
    try {
        const update = await Task.findByIdAndUpdate(req.params.taskId, {
            title: req.body.title,
            completed: req.body.completed
        }, { 
            new: true
        })
        return res.status(200).json(update)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteTask (req, res) {
    try {
        await Task.findByIdAndDelete(req.params.taskId)
        return res.status(200).json('Task Deleted')
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    createTask,
    getAllTasks,
    currentTasks,
    updateTask,
    deleteTask
}