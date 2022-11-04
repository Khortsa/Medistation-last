const express = require('express')

// controller functions
const intermediate  = require('../controllers/intermediateController')

const router = express.Router()

// intermediate route
router.post('/intermediate', intermediate)


module.exports = router