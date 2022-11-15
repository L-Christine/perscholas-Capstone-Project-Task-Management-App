const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks.js')

// ==POST /api/tasks ^create new task
router.post('/', tasksCtrl.createTask)
//==GET /api/tasks/all ^see all tasks
router.post('/all', tasksCtrl.getAllTasks)
//==GET /api/tasks/current ^see user tasks
router.post('/current', tasksCtrl.currentTasks)
//==PUT /api/tasks/:taskId ^update the task
router.put('/:taskId', tasksCtrl.updateTask)
//==DELETE /api/tasks/:taskId
router.delete('/:taskId', tasksCtrl.deleteTask)

module.exports = router