import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './bootstrap' // Import Bootstrap CSS and JS
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
