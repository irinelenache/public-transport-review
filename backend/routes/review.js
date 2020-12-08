const express = require('express')

const router = express.Router()

const reviewController = require('../controllers/ReviewController.js');

router.post('/review/create', reviewController.create)

router.put('/review/modify/{idUser}/{idReview}', reviewController.modify)

router.get('/review/listAll/{idUser}', reviewController.listAllByIdUser)

router.delete('/review/{idReview}', reviewController.findOne)

router.get('/list?search={searchParam}', reviewController.findAll)

module.exports = router;