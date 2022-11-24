const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')


// subscribe in Advance
const getAdvance = async (req, res) => {
    const {email, nom, prenom} = req.body
  
    try {
      const isBeginnerExist = await Beginner.userExist(email)
      const isIntermediaterExist = await Intermediate.userExist(email)
    if (isBeginnerExist || isIntermediaterExist ) {
      throw Error('déjà inscrit')
    }
        const advance = await Advance.subscription(email, nom, prenom)
      
      res.status(200).json({email, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
  module.exports = getAdvance