const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

// Register route (POST)
router.post('/register', authController.register)

// Login route (POST)
router.post('/login', authController.login)

router.post('/logout', authController.logout)

module.exports = router
