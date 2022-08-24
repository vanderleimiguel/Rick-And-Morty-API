const Character = require('./character')

//GetAll
const findAllCharactersService = async () => {
  const allCharacter = await Character.find()
  return allCharacter
}

//GetById
const findByIdCharacterService = async parametroId => {
  const oneCharacter = await Character.findById(parametroId)
  return oneCharacter
}

//create
const createCharacterService = async newCharacter => {
  const characterCreated = await Character.create(newCharacter)

  return characterCreated
}

//update
const updateCharacterService = async (id, characterEdited) => {
  const updateCharacter = await Character.findByIdAndUpdate(id, characterEdited)
  return updateCharacter
}

//delete
const deleteCharacterService = async id => {
  return await Character.findByIdAndDelete(id)
}

//search
const searchCharacterService = async name => {
  return await Character.findOne({ name: name })
}

module.exports = {
  findAllCharactersService,
  findByIdCharacterService,
  createCharacterService,
  updateCharacterService,
  deleteCharacterService,
  searchCharacterService
}
