import React from 'react'
import homeVideo from '../../assets/home1.mp4'
import './Home.style.css'

export default function Home() {
  const title = "Explore Kishanganj"

  return (
    <div className="hero-section">
      <video
        src={homeVideo}
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      />

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
      </div>
    </div>
  )
}
