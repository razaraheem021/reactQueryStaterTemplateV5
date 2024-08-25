import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useCreateData } from '../../hooks/useCreateHook'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const queryClient = useQueryClient()

  //   const mutation = useMutation(createTodo, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries('todos')
  //       setTitle('')
  //     },
  //   })
  const { formData, handleChange, handleSubmit } = useCreateData({
    endpoint: '/api/todo/create',
    queryKeys: ['todos'],
  })

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     mutation.mutate({ title, desc })
  //   }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Enter todo title"
        value={formData.title || ''}
        onChange={handleChange}
      />
      <input
        type="text"
        name="desc"
        placeholder="Enter todo desc"
        value={formData.desc || ''}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default TodoForm
