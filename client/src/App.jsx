import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { autoLogoutLoader } from './lib/auth'

const App = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('----------Running after every 10 seconds-----------')
      autoLogoutLoader()
    }, 10000)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId)
  }, [])
  return (
    <div>
      <header>
        <h1>Todo App</h1>
        <button
          onClick={() => {
            localStorage.removeItem('token')
            window.location.replace('/login')
          }}
        >
          Log out
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
