import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

export const useFormMutation = ({
  mutationFn,
  queryKeys = [],
  onSuccess,
  onError,
}) => {
  const [formData, setFormData] = useState({})
  const queryClient = useQueryClient()

  // Set up useMutation
  const mutation = useMutation({
    mutationFn: (data) => mutationFn(data),
    onSuccess: (data) => {
      console.log('Mutation successful:', data)

      // Invalidate all provided query keys
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key)
      })

      if (onSuccess) {
        onSuccess(data)
      }
    },
    onError: (error) => {
      console.error('Error in mutation:', error)
      if (onError) {
        onError(error)
      }
    },
  })

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

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
