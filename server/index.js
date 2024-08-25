require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/authRoutes')
const todoRoutes = require('./routes/todoRoutes')

const app = express()
const PORT = 8000

const url = `make your own db`

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose
  .connect(url, connectionParams)
  .then(() => {
    console.log('Connected to database ')
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`)
  })

// Middlewares
app.use(cors())
app.use(bodyParser.json())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api', todoRoutes)

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
