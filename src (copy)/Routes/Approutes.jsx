import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Accomodation from '../Pages/Accomodation/Accomodation.jsx'
import Culture from '../Pages/Culture/Culture.jsx'
import BlogList from '../Pages/Blogs/BlogList.jsx'
import Login from '../Components/Login/Login.jsx'
import Travel from '../Pages/Travel/Travel.jsx'
import Festivals from '../Pages/Culture/Festivals.jsx'
import Art from '../Pages/Culture/Art.jsx'
import Food from '../Pages/Culture/Food.jsx'
import { Routes, Route } from 'react-router-dom'
import Historykishanganj from '../Pages/About/Historykishanganj.jsx'
import Economy from '../Pages/About/Economy.jsx'
import Hotel from '../Pages/Hotel/Hotel_Homepage.jsx'
import Hotel_list from '../Pages/Hotel/Hotel_list.jsx'
import WhoIsWho from '../Pages/About/WhoIsWho.jsx'
import Bihar from '../Pages/Accomodation/Bihar.jsx'




export default function Approutes() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        
        <Route path='/About' element={<About />} />
        <Route path="/About/Historykishanganj" element={<Historykishanganj />} />
        <Route path="/About/WhoIsWho" element={<WhoIsWho />} />
        <Route path='/About/Economy' element={<Economy/>} />
        <Route path='/Accomodation' element={<Accomodation />} />
        
        {/* Dynamic route for Bihar places */}
        <Route path='/place/:placeName' element={<Bihar />} />
        
        <Route path='/Accomodation/Hotel_Homepage' element={<Hotel/>}/>
        <Route path='/Accomodation/Hotel_Homepage/Hotel_list' element={<Hotel_list/>}/>
        {/* <Route path='/Culture' element={<Culture/>}/> */}
        <Route path='/Culture/festivals' element={<Festivals />} />
        <Route path='/Culture/art' element={<Art />} />
        <Route path='/Culture/food' element={<Food />} />
        <Route path='/Blogs/BlogList' element={<BlogList />} />
        <Route path='/Travel' element={<Travel />} />
       
      </Routes>
    </>
  )
}
