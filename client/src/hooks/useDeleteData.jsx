import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteRequest } from '@/services/endpoints' // Adjust the path as needed

export const useDeleteData = ({ endpoint, queryKeys }) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (id) => deleteRequest(`${endpoint}/${id}`),
    onSuccess: () => {
      // Invalidate all provided query keys
      queryKeys.forEach((key) => {
        queryClient.invalidateQueries(key)
      })
    },
    onError: (error) => {
      console.error('Error deleting data:', error)
    },
  })

  return mutation
}
