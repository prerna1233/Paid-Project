import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Accomodation from '../Pages/Accomodation/Accomodation.jsx'
import Culture from '../Pages/Culture/Culture.jsx'
import Blogs from '../Pages/Blogs/AddBlog.jsx'
import Login from '../Components/Login/Login.jsx'
import Travel from '../Pages/Travel/Travel.jsx'
import Festivals from '../Pages/Culture/Festivals.jsx'
import Art from '../Pages/Culture/Art.jsx'
import Food from '../Pages/Culture/Food.jsx'
import WhoIsWho from '../Pages/About/WhoIsWho/WhoIsWho.jsx'
import { Routes, Route } from 'react-router-dom'
import BlogList from '../Pages/Blogs/BlogList.jsx'
import SignUp from '../Components/SignUp/SignUp.jsx'

export default function Approutes() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/About/WhoIsWho' element={<WhoIsWho />} />
        <Route path='/Accomodation' element={<Accomodation />} />
        <Route path='Culture' element={<Culture/>}/>
        <Route path='/Culture/festivals' element={<Festivals />} />
        <Route path='/Culture/art' element={<Art />} />
        <Route path='/Culture/food' element={<Food />} />
        <Route path='/AddBlog' element={<Blogs />} />
        <Route path='/Travel' element={<Travel />} />
        <Route path='/BlogList' element={<BlogList/>}/>
        <Route path ='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}
