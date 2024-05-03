import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Courses from './pages/list_courses'
import Description from './pages/description'
import Subscription from './pages/subscription'
import AlunoAtivo from './pages/sel_aluno_ativo.jsx'
import AtualizaPrazos from './pages/atualiza_prazos.jsx'
import CetreinaSobre from './pages/cetreina_sobre.jsx'


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
        <Route path='/sel_aluno_ativo' element={<AlunoAtivo />} />
        <Route path='/atualiza_prazos' element={<AtualizaPrazos />} />
        <Route path='/cetreina_sobre' element={<CetreinaSobre />} />
      </Routes>
    </>
  )
}
 
export default App
