const express = require('express')
const { getCheckoutPrice } = require('../controllers/cartController')

const router = express.Router()

router.get('/cart', getCheckoutPrice)

module.exports = router
