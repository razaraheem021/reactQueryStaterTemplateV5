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
  localStorage.setItem('token', response.data.token)
  //   window.location.replace('/')
}
