const mongoose = require('mongoose')
const User = require('../models/userModel')


const Schema = mongoose.Schema

const beginnerSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true
  }
},{ timestamps: true })

// static beginner method
beginnerSchema.statics.subscription = async function(author, nom, prenom) {

  // validation
  if (!nom && !prenom ) {
    throw Error('All fields must be filled')
  }
  const exists = await this.findOne({ author})
  
  if (exists) {
    throw Error('already inscript')
  }
  const beginner = await this.create({author, nom, prenom})
 

  return beginner
}

beginnerSchema.statics.userExist = async function(author) {

  // validation
  const exist = await this.findOne({ author})
  return exist
}

module.exports = mongoose.model('Beginner', beginnerSchema)