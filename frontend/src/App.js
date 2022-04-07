import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Blogs from './components/Blogs/Blogs'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import MusicWorld from './components/MusicWorld/MusicWorld'
import Navbar from './components/Shared/Navbar'
import Login from './components/Login/Login.js'
import SignUpUser from './components/Login/SignUpUser.js'


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
                <Route path='/login' element={<Login />} />
                <Route path='/signupUser' element={<SignUpUser />} />
     </Routes>
    </>
  )
}

export default App