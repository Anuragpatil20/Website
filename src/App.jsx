import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Homepage from './Pages/Homepage'
import Contactpage from './Pages/Contactpage'
import Footer from './Component/Footer'
import Projectpage from './Pages/Projectpage'
import Aboutpage from './Pages/Aboutpage'

function App() {
  return (
    <Routes>
        <Route path='' element = {<Navbar/>}/>
        <Route path='/home' element = {<Homepage/>}/>
        <Route path='/contact' element = {<Contactpage/>}/>
        <Route path='/footer'  element = {<Footer/>}/>
        <Route path='/project' element = {<Projectpage/>}/>
        <Route path='/about' element = {<Aboutpage/>}/>
    </Routes>
  )
}

export default App