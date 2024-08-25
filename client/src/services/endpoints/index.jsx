import axios from 'axios'

// Base URL for all API calls
const API_BASE_URL = 'http://localhost:8000'

// Function to handle GET requests
export const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your authentication token here
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// Function to handle POST requests
export const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your authentication token here
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// Function to handle PUT requests
export const putRequest = async (endpoint, data) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your authentication token here
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

// Function to handle DELETE requests
export const deleteRequest = async (endpoint) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Add your authentication token here
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
