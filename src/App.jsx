import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const App = () => {
  return (
    <Router>
      <div className="container">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Service' element={<Service/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

        
      </div>
    </Router>
  )
}

export default App
