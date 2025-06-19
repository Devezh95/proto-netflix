import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainRoutes from './MainRoutes.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
    <MainRoutes />
    </ThemeProvider>
  </React.StrictMode>,
)
