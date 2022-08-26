const mongoose = require('mongoose')

const validId = (req, res, next) => {
  const idParam = req.params.id

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'id invalid' })
  }
  next()
}

module.exports = {
  validId
}
