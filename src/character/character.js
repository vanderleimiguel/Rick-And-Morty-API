const { Schema, model } = require('mongoose')

const CharacterSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
})

const Character = model('characters', CharacterSchema)

module.exports = Character
