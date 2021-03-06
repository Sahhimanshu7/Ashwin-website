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
import SignUpadmin from './components/Login/SignUpadmin'
import AdminPage from './components/Admin/AdminPage'
import CreateBlog from './components/Admin/CreateBlog'
import BlogContent from './components/Admin/BlogContent'
import {StickyContainer, Sticky} from 'react-sticky';
import NepaliBlog from './components/Shared/NepaliBlog'
import ForeignBlog from './components/Shared/ForeignBlog'
import LocalBlog from './components/Shared/LocalBlog'
import BlogsDisplay from './components/Blogs/BlogsDisplay'
import Dashboard from './components/Login/Dashboard'
function App() {
  return (
   
    <StickyContainer>
      <Sticky topOffset={900}>
      {({
            style,

            // the following are also available but unused in this example
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight,
            
          }) => (
            <header style={style} isSticky={true} wasSticky={true}>
              <Navbar />
            </header>
          )}
    </Sticky>
    <Routes>
                <Route path="/" element={<Home />} />
                <Route index element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/music' element={<MusicWorld />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='blogs/:id' element={<BlogsDisplay />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signupUser' element={<SignUpUser />} />
                <Route path='/signupAdmin' element={<SignUpadmin />} />
                <Route path="/Your-Personal-profile/:id/:fullName" exact/>
                <Route path='/Admin/AdminPage' element={<AdminPage />} />
                <Route path='/Admin/CreateBlog' element={<CreateBlog />} />
                <Route path='/Admin/BlogContent' element={<BlogContent />} />
                <Route path='/NepaliBlog' element={<NepaliBlog />} />
                <Route path='/ForeignBlog' element={<ForeignBlog />} />
                <Route path='/LocalBlog' element={<LocalBlog />} />
                <Route path='/dashboard' element={<Dashboard />} />
     </Routes>
    </StickyContainer>
    
  )
}

export default App