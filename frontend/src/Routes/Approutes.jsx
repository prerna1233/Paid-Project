import React from 'react'
import Home from '../Pages/Home/Home.jsx'
import About from '../Pages/About/About.jsx'
import Destination from '../Pages/Destination/Destination.jsx'
import PlaceDetail from '../Pages/Destination/PlaceDetail.jsx'
import Culture from '../Pages/Culture/Culture.jsx'
import Blogs from '../Pages/Blogs/Blogs.jsx'
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
import Hotel_list_new from '../Pages/Hotel/Hotel_list_new.jsx'
import WhoIsWho from '../Pages/About/WhoIsWho.jsx'




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
        <Route path='/Destination' element={<Destination />} />
        
        {/* Dynamic route for places */}
        <Route path='/place/:placeName' element={<PlaceDetail />} />
        
        <Route path='/Destination/Hotel_Homepage' element={<Hotel/>}/>
        <Route path='/Destination/Hotel_Homepage/Hotel_list' element={<Hotel_list/>}/>
        <Route path='/Destination/hotel_list_new' element={<Hotel_list_new/>}/>
        {/* <Route path='/Culture' element={<Culture/>}/> */}
        <Route path='/Culture/festivals' element={<Festivals />} />
        <Route path='/Culture/art' element={<Art />} />
        <Route path='/Culture/food' element={<Food />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Travel' element={<Travel />} />
       
      </Routes>
    </>
  )
}
