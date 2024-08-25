import axios from 'axios'

// Create an axios instance
export const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

// Add a request interceptor to include the token in the headers if it exists
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    // Bypass the token check for certain routes (e.g., login, register)
    if (
      config.url.includes('/auth/login') ||
      config.url.includes('/auth/register')
    ) {
      return config
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      // Redirect to login only if the request is not for login or register
      window.location.href = '/login'
      return Promise.reject(new Error('No token found, redirecting to login'))
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default api
