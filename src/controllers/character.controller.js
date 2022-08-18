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
const createCharacterController = async (req, res) => {}

// update
const updateCharacterController = async (req, res) => {}

// delete
const deleteCharacterController = async (req, res) => {}

//search
const searchCharacterController = async (req, res) => {}

//exports functions
module.exports = {
  findAllCharactersController,
  findByIdCharacterController,
  createCharacterController,
  updateCharacterController,
  deleteCharacterController,
  searchCharacterController
}
