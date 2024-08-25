import React from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useFetchData } from '../../hooks/useFetchData'
import { useDeleteData } from '../../hooks/useDeleteData'

const TodoList = () => {
  const queryClient = useQueryClient()

  //   const { data: todos, isLoading } = useQuery('todos', getTodos)
  const {
    data: todos,
    status,
    error,
    isLoading,
  } = useFetchData({
    endpoint: '/api/todos',
    queryKeys: ['todos'],
  })

  //   const mutation = useMutation(deleteTodo, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('todos')
  //     },
  //   })

  const deleteTodo = useDeleteData({
    endpoint: '/api/todo',
    queryKeys: ['todos'],
  })

  const handleDeleteTodo = (id) => {
    console.log(id)
    deleteTodo.mutate(id)
  }

  if (status !== 'success') return <p>Loading todos...</p>
  console.log(status)
  return (
    <ul>
      {todos?.data?.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button
            onClick={() => {
              console.log(todo)
              handleDeleteTodo(todo._id)
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
