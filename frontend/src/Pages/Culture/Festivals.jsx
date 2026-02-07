import React, { useState } from "react";
import "./Festivals.style.css";
import FestivalData from "./FestivalData.js";
import Footer from "../../Components/Footer/Footer";

export default function Festivals() {
    const [selectedFestival, setSelectedFestival] = useState(null);

    return (
        <div className="festival-page">

            {/* Hero Section */}
            <div className="festival-hero">
                <img src="/src/assets/clipart_background.png" alt="Traditional festival" className='festival-img1' />
                <h1>Festival & Handicrafts of Bihar</h1>
            </div>
            {/* Zig-Zag Sections */}
            {FestivalData.map((item, index) => (
                <div
                    key={item.id}
                    className={`festival-section ${index % 2 === 0 ? "left" : "right"}`}
                >
                    <div className="festival-image-wrapper">
                      <img src={item.image}alt={item.title}className="festival-img"/>

                        
                    </div>
                    <div className="festival-text">
                        <h2>{item.title}</h2>
                        <p>{item.short}</p>
                        <button onClick={() => setSelectedFestival(item)}>
                            Read More
                        </button>
                    </div>
                </div>
            ))}
            {/* Modal */}
            {selectedFestival && (
                <>
                    <div
                        className="blur-bg"
                        onClick={() => setSelectedFestival(null)}
                    ></div>

                    <div className="festival-modal">
                        <img src={selectedFestival.image} alt={selectedFestival.title} />
                        <h2>{selectedFestival.title}</h2>
                        <p>{selectedFestival.full}</p>
                        <button onClick={() => setSelectedFestival(null)}>Close</button>
                    </div>
                </>
            )}
            <Footer />
        </div>
        
    );
   
  }