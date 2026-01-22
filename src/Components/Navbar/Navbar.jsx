import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Home from '../../Pages/Home/Home.jsx'
import About from '../../Pages/About/About.jsx'
import Accomodation from '../../Pages/Accomodation/Accomodation.jsx'
import Culture from '../../Pages/Culture/Culture.jsx'
import Blogs from '../../Pages/Blogs/Blogs.jsx'
import logo from '../../assets/logo.png'

export default function Navbar() {
    return (
        <>
            <div className="NavContainer flex flex-row justify-center items-center gap-100 w-full bg-green-200 p-3">

                {/* ---- LoGo ---- */}
                <div className="logo">
                    <img className='h-10 w-10' src={logo} alt="LoGo" />

                </div>

                {/* ----- NavLinks ----- */}
<<<<<<< Updated upstream
                <nav className='Navbar'>
                    <Link to="/">Home</Link> |
                    <Link to="/About">About</Link> |
                    <Link to="/Accomodation">Accomodation</Link> |
                    <Link to="/Culture">Culture</Link> |
                    <Link to="/Blogs">Blogs</Link>
=======
                <nav className={styles.navbar}>
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                    <Link to="/Accomodationpath">Explore</Link>

                    {/* <Link to="Accomodationpath">Explore</Link> */}
                    <Link to="Culture">Culture</Link>
                    <Link to="Travel">Blogs</Link>
>>>>>>> Stashed changes
                </nav>
                 
                 {/* ----- Profile Icon ----- */}
                <div className="ProfileIcon">
                    <img className='h-10 w-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="ProfileIcon" />
                </div>

            </div>
        </>
    )
}
