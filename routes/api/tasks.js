const express = require('express');
const router = express.Router();
const tasksCtrl = require('../../controllers/api/tasks')

router.get('/tasks/hello', (req,res) => {
    res.json('hello')
})

// router.post('/tasks', tasksCtrl.createTask)
// router.get('/all', tasksCtrl.getAllTask)

module.exports = router