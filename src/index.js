require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDatabase = require('./database/database')
const characterRoute = require('./character/character.route')
const userRoute = require('./users/users.route')
const authRoute = require('./auth/auth.route')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger.json')

const port = process.env.PORT || 3002
const app = express()

connectDatabase()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(express.json())
app.use(cors())
app.use('/users', userRoute)
app.use('/auth', authRoute)
app.use('/characters', characterRoute)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
