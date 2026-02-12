import React, { useState } from "react";
import "./Food.style.css";
import foodData from "./foodData";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Food() {
    const [selectedFood, setSelectedFood] = useState(null);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="food-lifestyle-page">

            {/* Hero Section */}
            <div className="food-lifestyle-hero">
                <img src="/src/assets/Screenshot from 2026-01-30 11-15-54.png" alt="Food & Lifestyle of Bihar" />
                <h1>Food & Lifestyle of Bihar</h1>
            </div>

            {/* First 6 sections in Zig-Zag Layout */}
            {foodData.slice(0, 6).map((item, index) => (
                <div
                    key={item.id}
                    className={`food-lifestyle-section ${index % 2 === 0 ? "left" : "right"}`}
                >
                    <div className="food-image-wrapper">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="food-lifestyle-text">
                        <h2>{item.title}</h2>
                        <p>{item.short}</p>
                        <button onClick={() => setSelectedFood(item)}>
                            Read More
                        </button>
                    </div>
                </div>
            ))}

            {/* Slider Section for Remaining Items */}
            <div className="food-slider-section">
                <h2 className="slider-heading">More Traditional Delicacies</h2>
                <Slider {...sliderSettings}>
                    {foodData.slice(6).map((item) => (
                        <div key={item.id} className="food-card-wrapper">
                            <div className="food-card">
                                <div className="food-card-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="food-card-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.short.substring(0, 120)}...</p>
                                    <button
                                        className="food-card-btn"
                                        onClick={() => setSelectedFood(item)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Modal */}
            {selectedFood && (
                <>
                    <div
                        className="blur-bg"
                        onClick={() => setSelectedFood(null)}
                    ></div>

                    <div className="food-lifestyle-modal">
                        <img src={selectedFood.image} alt={selectedFood.title} />
                        <h2>{selectedFood.title}</h2>
                        <p>{selectedFood.full}</p>
                        <button onClick={() => setSelectedFood(null)}>Close</button>
                    </div>
                </>
            )}
            <Footer />
        </div>
        
    );
   
}
