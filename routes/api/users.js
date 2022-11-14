const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/users', usersCtrl.create);
// POST /api/users/login
router.post("/users/login", usersCtrl.logIn);

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;