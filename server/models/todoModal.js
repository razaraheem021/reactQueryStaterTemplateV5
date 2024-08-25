const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
})

module.exports = mongoose.model('Todo', todoSchema)
