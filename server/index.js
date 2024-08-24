const express = require('express')
const bodyParser = require('body-parser')
const { faker } = require('@faker-js/faker')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const app = express()
const PORT = 8000

const db = new Array(20000).fill(null).map(() => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  desc: faker.lorem.sentence(),
  isCompleted: faker.datatype.boolean(),
  createdAt: faker.date.past(),
}))

// Middlewarres
app.use(cors())
app.use(bodyParser.json())

// Routes
app.get('/todo', (req, res) => {
  const items = db
  return res.json({ status: 'success', data: items })
})

app.post('/todo/mark-complete', (req, res) => {
  const { id } = req.body
  const itemIndex = db.findIndex((e) => e.id === id)

  if (itemIndex === -1)
    return res.json({ status: 'error', error: 'Invalid ID' })

  db[itemIndex].isCompleted = true

  return res.json({ status: 'success' })
})

app.post('/todo/create', (req, res) => {
  console.log(`[Server]: Creating new todo!`)
  const { title, desc } = req.body
  const id = uuidv4()
  const item = { id, title, desc, isCompleted: false, createdAt: new Date() }
  db.push(item)

  return res.json({ status: 'success', data: item })
})

// delete
app.delete('/todo/:id', (req, res) => {
  const { id } = req.params
  console.log(`[Server]: Deleting todo with id: ${id}`)

  const index = db.findIndex((todo) => todo.id === id)
  console.log('index', index)
  if (index !== -1) {
    const deletedItem = db.splice(index, 1) // Remove the item from the array
    return res.json({ status: 'success', data: deletedItem })
  } else {
    return res.status(404).json({ status: 'error', message: 'Todo not found' })
  }
})

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))
