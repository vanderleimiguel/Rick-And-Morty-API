const characterService = require('../services/character.service')
const mongoose = require('mongoose')

// Get ALL
const findAllCharactersController = async (req, res) => {
  const allCharacters = await characterService.findAllCharactersService()
  res.send(allCharacters)
}

// Get By Id
const findByIdCharacterController = async (req, res) => {
  const idParam = req.params.id
  const chosenCharacter = await characterService.findByIdCharacterService(
    idParam
  )
  res.send(chosenCharacter)
}

// Create
const createCharacterController = async (req, res) => {
  const character = req.body
  const newCharacter = await characterService.createCharacterService(character)
  res.status(201).send(newCharacter)
}

// update
const updateCharacterController = async (req, res) => {
  const idParam = req.params.id
  const editCharacter = req.body
  const updatedCharacter = await characterService.updateCharacterService(
    idParam,
    editCharacter
  )
  res.send(updatedCharacter)
}

// delete
const deleteCharacterController = async (req, res) => {
  const idParam = req.params.id
  await characterService.deleteCharacterService(idParam)
  res.send({ message: 'Character deletado com sucesso!' })
}

//search
const searchCharacterController = async (req, res) => {
  const name = req.query.name
  const searchName = await characterService.searchCharacterService(name)
  res.status(200).send(searchName)
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
