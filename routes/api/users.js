
const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.logIn);

module.exports = router;