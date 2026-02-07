import React, { useState } from "react";
import "./Food.style.css";
import foodData from "./foodData";
import Footer from "../../Components/Footer/Footer";

export default function Food() {
    const [selectedFood, setSelectedFood] = useState(null);

    return (
        <div className="food-lifestyle-page">

            {/* Hero Section */}
            <div className="food-lifestyle-hero">
                <img src="/src/assets/aloo_bhujiya.png" alt="Food & Lifestyle of Bihar" />
                <h1>Food & Lifestyle of Bihar</h1>
            </div>

            {/* Zig-Zag Sections */}
            {foodData.map((item, index) => (
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
