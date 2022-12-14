const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks.js')

//==POST /api/tasks ^create new task
router.post('/', tasksCtrl.createTask)

//==GET /api/tasks ^see all tasks
router.get('/', tasksCtrl.readTask)

//==GET /api/tasks/:id ^get the existing task for edit
router.get('/:id', tasksCtrl.editTask)

//==PUT /api/tasks/:id ^update the task
router.put('/:id', tasksCtrl.updateTask)

//==DELETE /api/tasks/:id
router.delete('/:id', tasksCtrl.deleteTask)

module.exports = router