const characterService = require('../services/character.service')
const mongoose = require('mongoose')

const findAllCharactersController = async (req, res) => {
  const allCharacters = await characterService.findAllCharactersService()
  if (allCharacters.length == 0) {
    return res.status(404).send({ message: 'No characters found' })
  }
  res.send(allCharacters)
}

const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id
  const chosenCharacter = await characterService.findByIdCharacterService(
    idParam
  )
  if (!chosenCharacter) {
    return res.status(400).send({ message: 'No character found' })
  }
  res.send(chosenCharacter)
}

const createCharacterController = async (req, res) => {
  const character = req.body
  const newCharacter = await characterService.createCharacterService(character)
  res.status(201).send(newCharacter)
}

const updateCharacterController = async (req, res) => {
  const idParam = req.params.id
  const editCharacter = req.body
  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    editCharacter
  )
  res.send(updatedCharacter)
}

const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id
  await characterService.deleteCharacterService(idParam)
  res.send({ message: 'Character deleted sucess!' })
}

const searchCharacterController = async (req, res) => {
  const name = req.query.name
  const searchName = await characterService.searchCharacterService(name)
  res.send(searchName)
}

//exports functions
module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharacterController
}
