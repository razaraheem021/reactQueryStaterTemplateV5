import { useQueryClient } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import { QueryCache } from '@tanstack/react-query'

const Contacts = () => {
  const queryClient = useQueryClient()
  const todo = {}
  const queryCache = new QueryCache({
    onError: (error) => {
      console.log(error)
    },
    onSuccess: (data) => {
      console.log(data)
    },
    onSettled: (data, error) => {
      console.log(data, error)
    },
  })

  const query = queryCache.find(['todos'])
  console.log(query)
  
  console.log(todo)
  return (
    <div>
      Contacts
      <div>
        {todo.isLoading ? (
          'Loading...'
        ) : todo.error ? (
          'Error fetching data'
        ) : (
          <p>Data___</p>
        )}
      </div>
    </div>
  )
}

export default Contacts
