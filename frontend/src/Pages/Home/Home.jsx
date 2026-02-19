import React, { Suspense } from 'react'
import LazyVideo from '../../Components/LazyVideo/LazyVideo'
import chulhaImg from '../../assets/chulha.jpg'
import tikuliArt from '../../assets/tikuli_art.png'
import littiImg from '../../assets/litti.jpg'
import teaImg from '../../assets/tea.jpeg'
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
        <LazyVideo 
          src="/videos/home-hero-original.mp4"
          poster="/assets/home-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="hero-video"
          aria-label="Kishanganj tourism hero background video"
        />

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
          <Link to="/Destination" style={{ textDecoration: "none" }}>
            <button className='btn'>Explore<FaArrowRight />
            </button>
          </Link>
        </div>
      </div>

      {/* All other sections outside hero-section */}
      <hr className="top-hr" />
        <div className='section-para'>
          <div className='para1'>
            <h3>Kishanganj</h3>
            <br />
            <p>Kishanganj is an important border district located in the northeastern part of Bihar. Due to its proximity to West Bengal and Nepal, it holds great cultural and commercial significance. The land here is very fertile, so crops like tea, maize, rice, jute, and vegetables are widely grown.
              Kishanganj is also known as the “Tea Town of Bihar” because of its large tea gardens. The district is famous for its rich cultural diversity, communal harmony, and peaceful coexistence of different communities.      </p>
          </div>
          <ImageStack />
        </div>
        <hr className="middle-hr" />
        <div><Banner />
        <HomeAbout/>
        
        {/* How to Reach Here Section */}
        <div className="reach-section">
          <div className="reach-container">
            <div className="reach-header">
              <div className="reach-title-bar"></div>
              <h2>How to Reach Here?</h2>
            </div>
            

            <div className="reach-options">
              <div className="reach-option">
                <div className="reach-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5S5.67 13 6.5 13 8 13.67 8 14.5 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5S16.67 13 17.5 13 19 13.67 19 14.5 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="#ff6b6b"/>
                  </svg>
                </div>
                <h3>Road</h3>
                <p>Kishanganj is well connected by road network. National Highway 27 passes through the district, connecting it to major cities like Siliguri, Darjeeling, and Kolkata.</p>
              </div>
              
              <div className="reach-option">
                <div className="reach-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 15.5C4 16.33 4.67 17 5.5 17S7 16.33 7 15.5 6.33 14 5.5 14 4 14.67 4 15.5ZM7 11.5C7 12.33 7.67 13 8.5 13S10 12.33 10 11.5 9.33 10 8.5 10 7 10.67 7 11.5ZM8 17.5C8 18.33 8.67 19 9.5 19S11 18.33 11 17.5 10.33 16 9.5 16 8 16.67 8 17.5ZM5 7H6V5.5C6 4.67 5.33 4 4.5 4S3 4.67 3 5.5 3.67 7 4.5 7H5ZM21 8.5V15.5C21 16.6 20.1 17.5 19 17.5H16.5C15.67 17.5 15 16.83 15 16V6C15 5.17 15.67 4.5 16.5 4.5H19C20.1 4.5 21 5.4 21 6.5V8.5Z" fill="#ff6b6b"/>
                  </svg>
                </div>
                <h3>Railway</h3>
                <p>Kishanganj Railway Station is an important junction on the Northeast Frontier Railway network, connecting to major cities across India including Delhi, Mumbai, and Kolkata.</p>
              </div>
              
              <div className="reach-option">
                <div className="reach-icon">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2S10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#ff6b6b"/>
                  </svg>
                </div>
                <h3>Air</h3>
                <p>The nearest airport is Bagdogra Airport, located approximately 80 km from Kishanganj. Regular flights connect Bagdogra to major Indian cities like Delhi, Mumbai, and Bangalore.</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* bottom hr */}
        <hr className="middle-hr" />
        <div className="culture-section" style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${teaImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}>
          <div className="culture-text">
            <h2>Culture of Kishanganj Bihar</h2>
            <p>
              Kishanganj’s culture places great importance on traditional food, such as rice, lentils, fish, and local vegetables.
              In many households, food is still cooked on traditional clay stoves (chulha), which enhances the taste and aroma.
              The local art and handicrafts of Kishanganj reflect simplicity, rural life, and a close connection with nature.
              Festivals like Eid, Durga Puja, Holi, and Chhath Puja are celebrated with enthusiasm, reflecting the district’s communal harmony and diversity.
              Tea gardens are a unique feature, earning Kishanganj the title “Tea Town of Bihar.”
            </p>
            {/* <button className="btn more">More<FaArrowRight /></button> */}
          </div>
          <div className="culture-images">
            <img src={chulhaImg} alt="Traditional Food" className='culture-img1' />
            <img src={tikuliArt} alt="Handicrafts" className='culture-img2' />
            <img src={littiImg} alt="Clay Stove" className='culture-img3' />
          </div>
        </div>
        
      <hr className="bottom-hr" />
      <Footer />
    </>
  )
} 


