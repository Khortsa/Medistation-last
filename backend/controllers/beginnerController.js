const Advance = require('../models/advanceModel')
const Beginner = require('../models/beginnerModel')
const Intermediate = require('../models/intermediateModel')

// subscribe in beginner
exports.postSubscription = async (req, res) => {
    const {email, nom, prenom} = req.body
    try {
      const isAdvanceExist = await Advance.userExist(email)
      const isIntermediaterExist = await Intermediate.userExist(email)
    if (isAdvanceExist || isIntermediaterExist ) {
      throw Error('vous êtes déjà inscrit')
    }
      const beginner = await Beginner.subscription(email, nom, prenom)
      res.status(200).json({email, nom, prenom})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }


exports.deleteSubscription = (req, res, next) => {
  Beginner.deleteOne({_id: req.params.id})
  .then(()=> res.status(200).json({ message: 'suscription suprimez'}))
  .catch(error => res.status(404).json({ error }));
}