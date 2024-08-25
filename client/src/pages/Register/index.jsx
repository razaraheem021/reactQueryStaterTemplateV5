import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '@/services/auth'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser({ username, password })
      navigate('/login')
    } catch (err) {
      setError('Registration failed')
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Register
