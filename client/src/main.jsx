// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import { createRouter } from '@tanstack/react-router'
// import { MantineProvider } from '@mantine/core'
// import querystring from 'query-string'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { QueryParamProvider } from 'use-query-params'
// import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

// import { routeTree } from './routeTree.gen'

// // Create a new router instance
// const router = createRouter({ routeTree })

// const queryClient = new QueryClient()
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       {/* <App /> */}
//       <RouterProvider router={router}>
//         <App />
//       </RouterProvider>
//     </QueryClientProvider>
//   </StrictMode>
// )

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Router'

// const queryClient = new QueryClient()
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry: 3,
      retryDelay: 1000,
      staleTime: 60000,
      cacheTime: 600000,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>
)
