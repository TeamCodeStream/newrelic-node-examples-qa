const express = require('express')
const {
  fetchUsers,
  fetchUserStateReport
} = require('../controllers/usersController')

const router = express.Router()

router.get('/users', fetchUsers)

router.get('/users/states', fetchUserStateReport)

module.exports = router
