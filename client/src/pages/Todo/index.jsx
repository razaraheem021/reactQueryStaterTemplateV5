import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { useQueryClient } from '@tanstack/react-query'

const Todo = () => {
  return (
    <div>
      <h2>Todo</h2>

      <TodoForm />
      <TodoList />
    </div>
  )
}

export default Todo
