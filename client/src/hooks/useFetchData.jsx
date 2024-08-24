import { useQuery } from '@tanstack/react-query'
import { getRequest } from '../endpoints' // Import the getRequest function

export const useFetchData = ({ endpoint, queryKeys = [], queryFn }) => {
  // Default query function if none is provided
  const defaultQueryFn = async () => {
    return await getRequest(endpoint)
  }

  const { data, status, error } = useQuery({
    queryKey: queryKeys,
    queryFn: queryFn || defaultQueryFn,
    staleTime: 1000 * 60 * 5, // Data is considered fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Data stays in cache for 10 minutes even after it's no longer used
  })

  return {
    data,
    status,
    error,
  }
}

// export default useFetchData
