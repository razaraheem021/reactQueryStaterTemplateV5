import { api } from '@/services'
import axios from 'axios'

export const registerUser = async (credentials) => {
  try {
    await api.post('/auth/register', credentials)
    console.log('User registered successfully')
    window.location.replace('/login')
  } catch (error) {
    console.log(error.message)
  }
}
export const loginUser = async (credentials) => {
  const response = await api.post('/auth/login', credentials)
  console.log('User logged in successfully')
  // Store the token and expiration time in localStorage
  localStorage.setItem('token', response.data.token)
  localStorage.setItem('expiresAt', response.data.expiresAt)

  // Optionally, you can redirect to the home or dashboard page
  // window.location.replace('/');
}
