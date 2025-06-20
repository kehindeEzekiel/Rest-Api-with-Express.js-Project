import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello, World!</h1>
    <p>This is a simple React application.</p>
   
  </StrictMode>,
)
