const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')
const User = require('../models/userModel')

// subscribe in beginner
const getBeginner = async (req, res) => {
    const {author, nom, prenom} = req.body
  
    try {

      const isAdvanceExist = await Advance.userExist(author)
      const isIntermediaterExist = await Intermediate.userExist(author)
    if (isAdvanceExist || isIntermediaterExist ) {
      throw Error('already inscript')
    }
      const beginner = await Beginner.subscription(author, nom, prenom)
      
      res.status(200).json({author, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getBeginner