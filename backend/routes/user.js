const express = require('express')

const router = express.Router()

const userController = require('../controllers/UserController.js');

router.post('/user/create', userController.create)

router.put('/user/resetPass', userController.resetPass)

module.exports = router;