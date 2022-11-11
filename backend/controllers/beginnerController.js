const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')


// subscribe in beginner
const getBeginner = async (req, res) => {
    const {email, nom, prenom} = req.body
    // console.log(email)
    try {
      const isAdvanceExist = await Advance.userExist(email)
      const isIntermediaterExist = await Intermediate.userExist(email)
    if (isAdvanceExist || isIntermediaterExist ) {
      throw Error('already inscript')
    }
      const beginner = await Beginner.subscription(email, nom, prenom)
      
      res.status(200).json({email, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getBeginner