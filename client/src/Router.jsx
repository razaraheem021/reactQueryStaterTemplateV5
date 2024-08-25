import React from 'react'
import { MantineProvider } from '@mantine/core'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import App from './App'
import Login from './pages/Login'
import Register from './pages/Register'
import Todo from './pages/Todo'
import NotFoundError from './pages/errors/NotFoundError'
import querystring from 'query-string'
import ProtectedRoute from './lib/petectedRoute'
import Contacts from './pages/contact'
import { RootBoundary } from './pages/errors/RootBondary'
import { getToken } from './lib/auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <QueryParamProvider
        adapter={ReactRouter6Adapter}
        options={{
          searchStringToObject: querystring.parse,
          objectToSearchString: querystring.stringify,
        }}
      >
        <ProtectedRoute>
          <App />
        </ProtectedRoute>
      </QueryParamProvider>
    ),
    errorElement: <RootBoundary />,
    loader: getToken,
    children: [
      { path: '/', element: <Todo /> },
      { path: '/contacts', element: <Contacts /> },
    ],
  },
  { path: 'login', element: <Login /> },
  { path: 'register', element: <Register /> },
  { path: '*', element: <NotFoundError /> },
])

export function Router() {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
