const express = require('express')
const requireAuth = require('../middleware/requireAuth')

// controller functions
const advance  = require('../controllers/advanceController')

const router = express.Router()
router.use(requireAuth)

// advance route
router.post('/advance', advance)


module.exports = router