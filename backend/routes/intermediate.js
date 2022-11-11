const express = require('express')
const requireAuth = require('../middleware/requireAuth')
// controller functions
const intermediate  = require('../controllers/intermediateController')

const router = express.Router()
router.use(requireAuth)

// intermediate route
router.post('/intermediate', intermediate)


module.exports = router