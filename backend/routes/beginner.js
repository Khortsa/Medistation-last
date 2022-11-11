const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const beginner  = require('../controllers/beginnerController')

const router = express.Router()
router.use(requireAuth)

// login route
router.post('/beginner', beginner)


module.exports = router