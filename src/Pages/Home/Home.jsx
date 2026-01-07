import React from 'react'
import homeVideo from '../../assets/home1.mp4'
import './Home.style.css'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';
import ImageStack from '../../Components/ImageStack/ImageStack';
import 'animate.css';
import 'react-icons/fa6';
import { Link } from 'react-router-dom';


export default function Home() {
  const title = "Explore Kishanganj"

  return (
    <>
      <div className="hero-section">
        <video src={homeVideo} autoPlay muted loop playsInline className="hero-video" />

        {/* LEFT SIDE TEXT */}
        <div className="hero-text left">
          <h1>
            {title.split("").map((char, index) => (
              <span
                key={index}
                className="fall-letter"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="subtitle">Nature • Culture • Peace</p>
       <Link to="/travel" style={{ textDecoration: "none" }}>
       <button className="btn">
         Explore <FaArrowRight />
       </button>
     </Link>
        </div>
        <hr className="top-hr" />
        <div className='section-para'>
          <div className='para1'>
            <h3>Kishanganj</h3>
            <br />
            <p>Kishanganj is a district and town located in the northeastern part of the Indian state of Bihar. It is known for its greenery, tea gardens, and its location near the borders of Nepal and West Bengal.</p>
          </div>
          <ImageStack />
          <Banner className="Banner" />

        </div>
        {/* bottom hr */}
        {/* <hr className="middle-hr" /> */}
        <div className="culture-section">
          <div className="culture-text">
            <h2>Culture of Kishanganj Bihar</h2>
            <p>
              Kishanganj’s culture places great importance on traditional food, such as rice, lentils, fish, and local vegetables.
              In many households, food is still cooked on traditional clay stoves (chulha), which enhances the taste and aroma.
              The local art and handicrafts of Kishanganj reflect simplicity, rural life, and a close connection with nature.
            </p>
            <button className="btn more">More<FaArrowRight /></button>
          </div>
          <div className="culture-images">
            <img src="src/assets/chulha.jpg" alt="Traditional Food" className='culture-img1' />
            <img src="src/assets/tikuli_art.png" alt="Handicrafts" className='culture-img2' />
            <img src="src/assets/litti.jpg" alt="Clay Stove" className='culture-img3' />
          </div>

        </div>
        <hr className="bottom-hr" />
        <Footer />
      </div>
    </>
  )
} 