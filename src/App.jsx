import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Courses from './pages/list_courses'
import Description from './pages/description'
import Subscription from './pages/subscription'


import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/course_description' element={<Description />} />
        <Route path='/subscription' element={<Subscription />} />
      </Routes>
    </>
  )
}
 
export default App
