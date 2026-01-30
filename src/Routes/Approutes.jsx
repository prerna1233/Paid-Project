import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Accomodation from './Pages/Accomodation/Accomodation.jsx';
import Culture from './Pages/Culture/Culture.jsx';
import Blogs from './Pages/Blogs/Blogs.jsx';
import Travel from './Pages/Travel/Travel.jsx';
import Bihar from './Pages/Bihar/Bihar.jsx';
import Login from '../Components/Login/Login.jsx';

export default function Approutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Accomodation' element={<Accomodation />} />
        <Route path='/Culture' element={<Culture />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Travel' element={<Travel />} />
        <Route path='/Bihar/:placeId' element={<Bihar />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}
