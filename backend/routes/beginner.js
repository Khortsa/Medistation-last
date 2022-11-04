const express = require('express')

// controller functions
const beginner  = require('../controllers/beginnerController')

const router = express.Router()

// login route
router.post('/beginner', beginner)


module.exports = router