import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Approutes from './Routes/Approutes';
import BlogList from "./Pages/Blogs/BlogList.jsx";

// 
export default function App() {
  return (
   <>
 
    <Navbar />
      {/* <BlogList/>   */}
   <Approutes />
   </>
  )
}
