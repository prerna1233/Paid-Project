import React from 'react'
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Approutes from './Routes/Approutes';
import Signup from './Components/Signup/Signup';

export default function App() {
  return (
   <>
   <Navbar />
   <Approutes />
   <Signup />
   </>
  )
}
