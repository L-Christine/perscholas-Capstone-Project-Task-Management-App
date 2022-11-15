const Task = require('../../models/taskSchema')

async function createTask(req, res) {
    try{
        const newTask = await new Task({ text: req.body.text })
        const saveTask = await newTask.save()
        res.status(200).send(saveTask);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function readTask (req, res) {
    try {
        const allTasks = await Task.find({})
        res.status(200).json(allTasks)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function updateTask (req, res) {
    try {
        const editTask = await Task.findByIdAndUpdate(
            req.params.id, req.body);
        res.status(200).json(editTask);
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deleteTask (req, res) {
    try {
        const deleteThis = await Task.findByIdAndDelete(req.params.id);res.status(200).send('Deleted')
    } catch(err) {
        res.status(400).json(err)
    }

}

module.exports = {
    createTask,
    readTask,
    updateTask,
    deleteTask
}