const route = require('express').Router()
const controllercharacters = require('./character.controller')

route.get('/', controllercharacters.findAllCharactersController)
route.get('/find/:id', controllercharacters.findByIdCharacterController)
route.post('/create', controllercharacters.createCharacterController)
route.put('/update/:id', controllercharacters.updateCharacterController)
route.delete('/delete/:id', controllercharacters.deleteCharacterController)
route.get('/search', controllercharacters.searchCharacterController)

module.exports = route
