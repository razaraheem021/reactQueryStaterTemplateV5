import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
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
