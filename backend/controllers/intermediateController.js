const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')
const User = require('../models/userModel')

// subscribe in Intermediate
const getIntermediate = async (req, res) => {
    const {author, nom, prenom} = req.body
  
    try {

      const isAdvanceExist = await Advance.userExist(author)
      const isBeginnerExist = await Beginner.userExist(author)
    if (isAdvanceExist || isBeginnerExist ) {
      throw Error('already inscript')
    }
      const intermediate = await Intermediate.subscription(author, nom, prenom)
  
      res.status(200).json({author, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getIntermediate