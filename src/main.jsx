import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProvaProvider } from './assets/context/ProvaContext.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvaProvider>
      <App />
    </ProvaProvider>
  </React.StrictMode>,
)