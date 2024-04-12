import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
 
function App() {
  let component

  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/about':
      component = <About />
      break
    case '/contact':
      component = <Contact />
      break
  }

  return (
    <>
      <Navbar />
      {component}     
    </>

  )
}
 
export default App
