import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BinaryStreams from './BinaryStreams.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <BinaryStreams count={10} />
  </React.StrictMode>
)
