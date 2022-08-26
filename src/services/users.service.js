const User = require('../databases/mongo/schemas/user')
const UserEntity = require('../entities/user.entity')

const findByEmailUserService = email => User.findOne({ email: email })

const createUserService = async user => {
  const newUser = new UserEntity(user)
  newUser.validObjectBody()
  const newUserValidated = { ...newUser.getUser() }
  const userCreated = await User.create(newUserValidated)

  return userCreated
}

const findAllUserService = () => User.find()

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUserService
}
