const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')


// subscribe in Intermediate
const getIntermediate = async (req, res) => {
    const {email, nom, prenom} = req.body
    try {
      const isAdvanceExist = await Advance.userExist(email)
      const isBeginnerExist = await Beginner.userExist(email)
    if (isAdvanceExist || isBeginnerExist ) {
      throw Error('already inscript')
    }
      await Intermediate.subscription(email, nom, prenom)
  
      res.status(200).json({email, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getIntermediate