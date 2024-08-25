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
    endpoint: '/todos',
    queryKeys: ['todos'],
  })

  const handleDeleteTodo = (id) => {
    deleteTodo.mutate(id)
  }

  if (isLoading) return <p>Loading todos...</p>

  return (
    <ul>
      {todos?.data?.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
