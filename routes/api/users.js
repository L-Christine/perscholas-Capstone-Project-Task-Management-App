const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post("/login", usersCtrl.logIn);
// GET /api/users/info
router.get('/info', usersCtrl.getUserInfo)
// PUT /api/users/info
router.put('/info', usersCtrl.updateUserInfo)

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;