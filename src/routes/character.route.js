const route = require('express').Router()
const controllercharacters = require('../controllers/character.controller')
const { validId } = require('../midllewares/character.midlleware')
const authMiddleware = require('../midllewares/auth.midlleware')

route.get('/', authMiddleware, controllercharacters.findAllCharactersController)
route.get(
  '/find/:id',
  authMiddleware,
  validId,
  controllercharacters.findByIdCharacterController
)
route.post(
  '/create',
  authMiddleware,
  controllercharacters.createCharacterController
)
route.put(
  '/update/:id',
  authMiddleware,
  validId,
  controllercharacters.updateCharacterController
)
route.delete(
  '/delete/:id',
  authMiddleware,
  validId,
  controllercharacters.deleteCharacterController
)
route.get('/search', controllercharacters.searchCharacterController)

module.exports = route
