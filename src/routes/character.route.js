const route = require('express').Router()
const controllercharacters = require('../controllers/character.controller')
const { validId } = require('../midllewares/character.midlleware')

route.get('/', controllercharacters.findAllCharactersController)
route.get(
  '/find/:id',
  validId,
  controllercharacters.findByIdCharacterController
)
route.post('/create', controllercharacters.createCharacterController)
route.put(
  '/update/:id',
  validId,
  controllercharacters.updateCharacterController
)
route.delete(
  '/delete/:id',
  validId,
  controllercharacters.deleteCharacterController
)
route.get('/search', controllercharacters.searchCharacterController)

module.exports = route
