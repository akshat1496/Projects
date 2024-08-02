import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Upperhead from './assets/Heading.jsx'
import MainContent from './assets/Main-Content.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Upperhead/>
    <MainContent/>
  </React.StrictMode>,
)
