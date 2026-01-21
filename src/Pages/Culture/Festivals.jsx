import React, { useState } from "react";
import "./Art.style.css";
import artData from "./ArtData";
import art1 from "../../assets/culturePage/art1.png";
import Footer from "../../Components/Footer/Footer";

export default function Festival() {
    const [selectedArt, setSelectedArt] = useState(null);

    return (
        <div className="art-page">

            {/* Hero Section */}
            <div className="art-hero">
                <img src={art1} alt="Art & Handicrafts of Bihar" />
                <h1>Art & Handicrafts of Bihar</h1>
            </div>

            {/* Zig-Zag Sections */}
            {artData.map((item, index) => (
                <div
                    key={item.id}
                    className={`art-section ${index % 2 === 0 ? "left" : "right"}`}
                >
                    <div className="art-image-wrapper">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="art-text">
                        <h2>{item.title}</h2>
                        <p>{item.short}</p>
                        <button onClick={() => setSelectedArt(item)}>
                            Read More
                        </button>
                    </div>
                </div>
            ))}
            {/* Modal */}
            {selectedArt && (
                <>
                    <div
                        className="blur-bg"
                        onClick={() => setSelectedArt(null)}
                    ></div>

                    <div className="art-modal">
                        <img src={selectedArt.image} alt={selectedArt.title} />
                        <h2>{selectedArt.title}</h2>
                        <p>{selectedArt.full}</p>
                        <button onClick={() => setSelectedArt(null)}>Close</button>
                    </div>
                </>
            )}
            <Footer />
        </div>
        
    );
   
}

