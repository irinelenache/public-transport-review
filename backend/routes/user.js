const express = require('express')

const router = express.Router()

const userController = require('../controllers/UserController.js');

router.post('/create', userController.create)

router.put('/resetPass/:id', userController.resetPass)

module.exports = router;