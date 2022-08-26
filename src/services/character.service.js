const Character = require('../databases/mongo/schemas/character')
const CharacterEntity = require('../entities/character.entity')

const findAllCharactersService = async () => {
  const allCharacter = await Character.find()
  return allCharacter
}

const findByIdCharacterService = async parametroId => {
  const oneCharacter = await Character.findById(parametroId)
  return oneCharacter
}

const createCharacterService = async character => {
  const newCharacter = new CharacterEntity(character)
  newCharacter.validObjectBody()
  const newCharacterValidated = { ...newCharacter.getCharacter() }
  const characterCreated = await Character.create(newCharacterValidated)

  return characterCreated
}

const updateCharacterService = async (id, characterEdited) => {
  const newCharacterEdited = new CharacterEntity(characterEdited)
  newCharacterEdited.validObjectBody()
  const newCharacterEditedValidated = { ...newCharacterEdited.getCharacter() }
  const updateCharacter = await Character.findByIdAndUpdate(
    id,
    newCharacterEditedValidated
  )
  return updateCharacter
}

const deleteCharacterService = async id => {
  return await Character.findByIdAndDelete(id)
}

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
