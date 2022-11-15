const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const beginner  = require('../controllers/beginnerController')

const router = express.Router()

// require auth for all beginner route
router.use(requireAuth)

// login route
router.post('/beginner', beginner)


module.exports = router