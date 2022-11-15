const mongoose = require('mongoose')



const Schema = mongoose.Schema

const intermediateSchema = new Schema({
  email: {
    type: String,
   required: true 
 },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true
  }
},{ timestamps: true })

// static intermediate method
intermediateSchema.statics.subscription = async function(email, nom, prenom) {

  // validation
  if (!nom && !prenom ) {
    throw Error('All fields must be filled')
  }
  const exists = await this.findOne({ email })
  
  if (exists) {
    throw Error('already inscript')
  }
  const intermediate = await this.create({email, nom, prenom})
  
  return intermediate
}

intermediateSchema.statics.userExist = async function(email, nom, prenom) {

  // validation
  const exist = await this.findOne({ email})
  return exist
}

module.exports = mongoose.model('Intermediate', intermediateSchema)
