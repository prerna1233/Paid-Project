import React from 'react'
import homeVideo from '../../assets/home1.mp4'
import './Home.style.css'
import { FaArrowRight } from "react-icons/fa";
import Footer from '../../Components/Footer/Footer';
import Banner from '../../Components/Banner/Banner';

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
          <button className='btn'>Explore<FaArrowRight /></button>
        </div>
        <hr />
        <div className='hero-section-para'>
          <div className='para1'>
            <h3>Kishanganj</h3>
            <br />
            <p>Kishanganj is a district and town located in the northeastern part of the Indian state of Bihar. It is known for its greenery, tea gardens, and its location near the borders of Nepal and West Bengal.</p>
          </div>
          <div className='image-stack'>
            <img className="image1" src='src/assets/1pic.png' alt="Kishanganj image 1" />
            <img className="image2" src='src/assets/2pic.png' alt="Kishanganj image 2" />
            <img className="image3" src='src/assets/3pic.png' alt="Kishanganj image 3" />
          </div>
        </div>
      </div>
      <Banner className="Banner" />
    </>
  )
}
