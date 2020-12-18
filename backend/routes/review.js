const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/ReviewController.js');

router.post('/create/:id', reviewController.create)

router.put('/modify/:idUser/:idReview', reviewController.modify)

router.get('/listAll/:idUser', reviewController.listAllByIdUser)

router.delete('/{idReview}', reviewController.findOne)

router.get('/list', reviewController.findAll)

module.exports = router;