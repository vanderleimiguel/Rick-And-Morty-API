const authServices = require('../services/auth.service')
const bcrypt = require('bcryptjs')

class AuthControllers {
  loginController = async (req, res) => {
    try {
      const { email, password } = req.body
      const foundUser = await authServices.findUserByEmail(email)

      if (!foundUser) {
        res.status(400).send({ message: 'Usuario não encontrado' })
      } else {
        const verify = await bcrypt.compare(password, foundUser.password)

        const token = authServices.generateToken(foundUser._id)

        if (verify === true) {
          res.status(200).send({ token: token })
        } else {
          res.status(400).send({ message: 'Senha errada' })
        }
      }
    } catch (err) {
      res.status(400).send({ message: 'Error during login' })
    }
  }
}

module.exports = authControllers = new AuthControllers()
