const crypto = require('node:crypto')
class CharacterEntity {
  constructor(character) {
    this.id = character.id ?? crypto.randomUUID()
    this.name = character.name
    this.image = character.image
  }

  validObjectBody() {
    if (!this.name) {
      throw new Error('Character name is not informed')
    }
    if (!this.image) {
      throw new Error('Character image is not informed')
    }
  }

  getCharacter() {
    return {
      id: this.id,
      name: this.name,
      image: this.image
    }
  }
}

module.exports = CharacterEntity
