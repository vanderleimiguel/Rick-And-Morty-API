const router = require('express').Router()
const userController = require('../controllers/users.controller')
const authMiddleware = require('../midllewares/auth.midlleware')

router.post('/create', userController.createUserController)
router.get('/', authMiddleware, userController.findAllUserController)

module.exports = router
