const Todo = require('../models/todoModal')

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user._id })
    res.json({ status: 'success', data: todos })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to fetch todos', error })
  }
}

exports.createTodo = async (req, res) => {
  const { title, desc } = req.body

  try {
    const newTodo = new Todo({
      title,
      desc,
      user: req.user._id,
    })
    await newTodo.save()
    res.json({ status: 'success', data: newTodo })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to create todo', error })
  }
}

exports.deleteTodo = async (req, res) => {
  const { id } = req.params

  try {
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user._id })
    if (!todo) {
      return res
        .status(404)
        .json({ status: 'error', message: 'Todo not found' })
    }

    res.json({ status: 'success', message: 'Todo deleted', data: todo })
  } catch (error) {
    res
      .status(500)
      .json({ status: 'error', message: 'Failed to delete todo', error })
  }
}
