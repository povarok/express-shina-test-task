import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { queryClient } from 'api'

const root = createRoot(document.getElementById('app-root'))
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
)
