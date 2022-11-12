const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks');

//==POST: /api/tasks
router.post('/tasks', tasksCtrl.createTask)

module.exports = router;