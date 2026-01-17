import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Accomodation from '../Pages/Accomodation/Accomodation.jsx'
import Culture from '../Pages/Culture/Culture.jsx'
import Blogs from '../Pages/Blogs/Blogs.jsx'
import Login from '../Components/Login/Login.jsx'
import Travel from '../Pages/Travel/Travel.jsx'
import { Routes, Route } from 'react-router-dom'

export default function Approutes() {
  return (
    <>
     <Routes>
      <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Accomodation' element={<Accomodation />} />
        <Route path='/Culture' element={<Culture />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Travel' element={<Travel />} />
     </Routes>
    </>
  )
}
