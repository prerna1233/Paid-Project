import React, { useState } from "react";
import "./Art.style.css";
import artData from "./ArtData";
import cultureTop from "../../assets/artpage/culture-top.png";
import Footer from "../../Components/Footer/Footer";

export default function Art() {
    const [selectedArt, setSelectedArt] = useState(null);

    return (
        <div className="art-page">

            {/* Hero Section */}
            <div className="art-hero">
                <img src={cultureTop} alt="Art & Handicrafts of Bihar" />
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
                                                <p className="lead">{item.short}</p>

                                                {/* tags / badges */}
                                                <div className="tag-list">
                                                    {item.themes && item.themes.slice(0,4).map((t, i) => (
                                                        <span className="tag" key={`theme-${i}`}>{t}</span>
                                                    ))}
                                                    {item.materials && item.materials.slice(0,4).map((m, i) => (
                                                        <span className="tag" key={`mat-${i}`}>{m}</span>
                                                    ))}
                                                    {item.features && item.features.slice(0,4).map((f, i) => (
                                                        <span className="tag" key={`feat-${i}`}>{f}</span>
                                                    ))}
                                                </div>

                                                {/* excerpt from full description to give more content in card */}
                                                {item.full && (
                                                    <p className="excerpt">{item.full.length > 180 ? item.full.slice(0, 180) + '...' : item.full}</p>
                                                )}

                                                                                                {/* short practical info */}
                                                                                                <div style={{ marginTop: '10px', color: '#555' }}>
                                                                                                    {item.whereToSee && (
                                                                                                        <div><strong>Where to see:</strong> {item.whereToSee}</div>
                                                                                                    )}
                                                                                                    {item.workshops && (
                                                                                                        <div><strong>Workshops:</strong> {item.workshops}</div>
                                                                                                    )}
                                                                                                </div>

                                                <div style={{ marginTop: 'auto' }}>
                                                    <button className="read-more" onClick={() => setSelectedArt(item)}>
                                                            Read More
                                                    </button>
                                                </div>
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
                                                {/* modal expanded metadata */}
                                                {selectedArt.themes && (
                                                    <p><strong>Themes:</strong> {selectedArt.themes.join(', ')}</p>
                                                )}
                                                {selectedArt.materials && (
                                                    <p><strong>Materials:</strong> {selectedArt.materials.join(', ')}</p>
                                                )}
                                                {selectedArt.features && (
                                                    <p><strong>Features:</strong> {selectedArt.features.join(', ')}</p>
                                                )}
                                                {selectedArt.status && (
                                                    <p><strong>Status:</strong> {selectedArt.status}</p>
                                                )}
                                                {selectedArt.socialImpact && (
                                                    <p><strong>Social impact:</strong> {selectedArt.socialImpact}</p>
                                                )}

                                                {/* Practical sections */}
                                                {selectedArt.whereToSee && (
                                                    <p><strong>Where to see:</strong> {selectedArt.whereToSee}</p>
                                                )}
                                                {selectedArt.workshops && (
                                                    <p><strong>Workshops:</strong> {selectedArt.workshops}</p>
                                                )}
                                                {selectedArt.marketAccess && (
                                                    <p><strong>Market access:</strong> {selectedArt.marketAccess}</p>
                                                )}
                                                {selectedArt.howToBuy && (
                                                    <p><strong>How to buy:</strong> {selectedArt.howToBuy}</p>
                                                )}
                                                {selectedArt.preservation && (
                                                    <p><strong>Preservation:</strong> {selectedArt.preservation}</p>
                                                )}

                                                <p style={{ marginTop: '12px' }}>{selectedArt.full}</p>
                                                <button onClick={() => setSelectedArt(null)}>Close</button>
                    </div>
                </>
            )}
            <Footer />
        </div>
        
    );
   
}
