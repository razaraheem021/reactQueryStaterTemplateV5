const express = require('express')
const todoController = require('../controllers/todoController')
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()

router.get('/todos', authMiddleware, todoController.getTodos)
router.post('/todo/create', authMiddleware, todoController.createTodo)
router.delete('/todo/:id', authMiddleware, todoController.deleteTodo)

module.exports = router
