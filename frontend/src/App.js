import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import MusicWorld from './components/MusicWorld/MusicWorld'
import Navbar from './components/Shared/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/music' element={<MusicWorld />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
     </Routes>
    </>
  )
}

export default App