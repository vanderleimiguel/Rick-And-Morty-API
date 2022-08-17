require('dotenv').config()
const express = require('express')
const cors = require('cors')

const port = process.env.PORT || 3002
const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'hell word!' })
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
