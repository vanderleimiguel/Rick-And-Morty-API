class UserEntity {
  constructor(user) {
    this.name = user.name
    this.username = user.username
    this.email = user.email
    this.password = user.password
    this.photo = user.photo
  }

  validObjectBody() {
    if (!this.name) {
      throw new Error('Name is not informed')
    }
    if (!this.username) {
      throw new Error('Username is not informed')
    }
    if (!this.email) {
      throw new Error('Email is not informed')
    }
    if (!this.password) {
      throw new Error('Password is not informed')
    }
    if (!this.photo) {
      throw new Error('Photo is not informed')
    }
  }

  getUser() {
    return {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      photo: this.photo
    }
  }
}

module.exports = UserEntity
