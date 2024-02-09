import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import NavBar from './assets/components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
