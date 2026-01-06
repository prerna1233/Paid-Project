import React from 'react'
import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Home from '../../Pages/Home/Home.jsx'
import About from '../../Pages/About/About.jsx'
import Accomodation from '../../Pages/Accomodation/Accomodation.jsx'
import Culture from '../../Pages/Culture/Culture.jsx'
import Blogs from '../../Pages/Blogs/Blogs.jsx'
import logo from '../../assets/logo.png'
import { MdLanguage } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Navbar() {
    const [dark,light]=useState(false);
    return (
        <>
            <div className={styles.NavContainer}>

                {/* ---- LoGo ---- */}
                <div className={styles.logo}>
                    <img src={logo} alt="LoGo" />

                </div>

                {/* ----- NavLinks ----- */}
                <nav className={styles.navbar}>
                    <Link to="/">Home</Link>
                    <Link to="About">About</Link>
                    <Link to="Accomodation">Accomodation</Link>
                    <Link to="Culture">Culture</Link>
                    <Link to="Blogs">Blogs</Link>
                </nav>

                {/* ----- Right Section ----- */}
                <div className={styles.right}>

                    {/* Theme Icon */}
                    <div className={styles.themeIcon} onClick={() => light(!dark)}>
                        {dark ? <BsMoon /> : <BsSun />}
                    </div>

                    {/* Language Icon */}
                    <div className={styles.language}>
                        <MdLanguage className={styles.languageIcon} />
                        <select>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    {/* ----- Profile Icon ----- */}
                    <div className={styles.ProfileIcon}>
                        <img className='h-10 w-10 rounded-full' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="ProfileIcon" />
                    </div>

                </div>
            </div>
        </>
    )
}
