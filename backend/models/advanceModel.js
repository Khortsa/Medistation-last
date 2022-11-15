const mongoose = require('mongoose')

const Schema = mongoose.Schema

const advanceSchema = new Schema({
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

// static advance method
advanceSchema.statics.subscription = async function(email, nom, prenom) {

  // validation
  if (!nom && !prenom ) {
    throw Error('All fields must be filled')
  }
  const exists = await this.findOne({ email })
  
  if (exists) {
    throw Error('already inscript')
  }
  const advance = await this.create({email, nom, prenom})
 

  return advance
}

advanceSchema.statics.userExist = async function(email, nom, prenom) {

  // validation
  const exist = await this.findOne({ email })
  return exist
}

module.exports = mongoose.model('Advance', advanceSchema)