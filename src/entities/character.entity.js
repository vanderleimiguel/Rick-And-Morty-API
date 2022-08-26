class CharacterEntity {
  constructor(character) {
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
      name: this.name,
      image: this.image
    }
  }
}

module.exports = CharacterEntity
