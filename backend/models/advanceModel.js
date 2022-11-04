const mongoose = require('mongoose')
const User = require('../models/userModel')


const Schema = mongoose.Schema

const advanceSchema = new Schema({
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

// static advance method
advanceSchema.statics.subscription = async function(author, nom, prenom) {

  // validation
  if (!nom && !prenom ) {
    throw Error('All fields must be filled')
  }
  const exists = await this.findOne({author})
  
  if (exists) {
    throw Error('already inscript')
  }
  const advance = await this.create({author, nom, prenom})
 

  return advance
}

advanceSchema.statics.userExist = async function(author) {

  // validation
  const exist = await this.findOne({ author})
  return exist
}

module.exports = mongoose.model('Advance', advanceSchema)