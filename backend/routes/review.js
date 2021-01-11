const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/ReviewController.js');

router.post('/create/:id', reviewController.create)

router.put('/modify/:idUser/:idReview', reviewController.modify)

router.get('/listAll/:idUser', reviewController.listAllByIdUser)

router.delete('/delete/:idReview', reviewController.deleteReview)

router.get('/list', reviewController.findAll)

router.get('listByParams/:leavingPoint/:arrivingPoint/:transport', reviewController.listAllByParams)

module.exports = router;