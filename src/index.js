require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDatabase = require('./databases/mongo/connection/database')
const characterRoute = require('./routes/character.route')
const userRoute = require('./routes/users.route')
const authRoute = require('./routes/auth.route')
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
