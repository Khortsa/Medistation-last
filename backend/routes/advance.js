const express = require('express')

// controller functions
const advance  = require('../controllers/advanceController')

const router = express.Router()

// advance route
router.post('/advance', advance)


module.exports = router