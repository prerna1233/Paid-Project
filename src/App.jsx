import React from 'react'
import Login from './Components/Login/Login';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Approutes from './Routes/Approutes';

export default function App() {
  return (
   <>
   <Navbar />
   <Approutes />
   <Login/>
   </>
  )
}
