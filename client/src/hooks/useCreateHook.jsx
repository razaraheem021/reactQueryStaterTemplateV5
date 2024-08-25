import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { postRequest } from '../services/endpoints'

export const useCreateData = ({ endpoint, queryKeys }) => {
  const [formData, setFormData] = useState({})
  const queryClient = useQueryClient()

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Set up useMutation
  const mutation = useMutation({
    mutationFn: (data) => postRequest(endpoint, data),
    onSuccess: () => {
      // Invalidate all provided query keys
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key)
      })
    },
    onError: (error) => {
      console.error('Error creating data:', error)
    },
  })

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault()
    mutation.mutate(formData)
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    mutation,
  }
}
