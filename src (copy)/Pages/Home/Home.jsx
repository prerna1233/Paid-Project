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
import HomeAbout from './HomeAbout';

export default function Home() {
  const title = "Explore Kishanganj"

  return (
    <>
      <div className="hero-section">
        <video src={homeVideo} autoPlay muted loop playsInline className="hero-video" />

        {/* LEFT SIDE TEXT */}
        <div className="home-hero-text">
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
          <Link to="Travel" style={{ textDecoration: "none" }}>
            <button className='btn'>Explore<FaArrowRight />
            </button>
          </Link>
        </div>
        <hr className="top-hr" />
        <div className='section-para'>
          <div className='para1'>
            <h3>Kishanganj</h3>
            <br />
            <p>Kishanganj is an important border district located in the northeastern part of Bihar. Due to its proximity to West Bengal and Nepal, it holds great cultural and commercial significance. The land here is very fertile, so crops like tea, maize, rice, jute, and vegetables are widely grown.
              Kishanganj is also known as the “Tea Town of Bihar” because of its large tea gardens. The district is famous for its rich cultural diversity, communal harmony, and peaceful coexistence of different communities. People from Hindu, Muslim, Sikh, and Christian communities live together here, making it a beautiful example of unity in diversity.
            </p>
          </div>
          <ImageStack />
        </div>
        <hr className="middle-hr" />
        <div><Banner />
        <br/>
        <HomeAbout/>
        </div>

        {/* bottom hr */}
        <hr className="middle-hr" />
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