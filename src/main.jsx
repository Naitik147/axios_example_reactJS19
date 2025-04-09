import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Movie } from './pages/Movie'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Movie />
  </StrictMode>,
)
