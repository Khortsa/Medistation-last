const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')
const User = require('../models/userModel')

// subscribe in Advance
const getAdvance = async (req, res) => {
    const {author, nom, prenom} = req.body
  
    try {
      const isBeginnerExist = await Beginner.userExist(author)
      const isIntermediaterExist = await Intermediate.userExist(author)
    if (isBeginnerExist || isIntermediaterExist ) {
      throw Error('already inscript')
    }
        const advance = await Advance.subscription(author, nom, prenom)
      
      res.status(200).json({author, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getAdvance