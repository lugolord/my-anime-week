import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AnimeProvider from './context/AnimeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </StrictMode>,
)
