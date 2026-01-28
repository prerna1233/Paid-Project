import React from "react";
import "./Economy.css";
import economyData from "./Economy";
import heroImage from "/src/assets/kishan.jpg";
import Footer from "../../Components/Footer/Footer";


export default function Economy() {
    return (
        <>

            <div
                className="economy-hero"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="hero-overlay">
                    <h1>Kishanganj District</h1>
                    <p>Economy Overview</p>
                </div>
            </div>


            <div className="economy-page">
                <h1>{economyData.title}</h1>
                <h3>General Information</h3>

                {economyData.description.map((para, index) => (
                    <p key={index}>{para}</p>
                ))}

            

                <h3>Important Rivers</h3>
                <ul>
                    {economyData.rivers.map((river, index) => (
                        <li key={index}>{river}</li>
                    ))}
                </ul>

                <h3 className="produce-title">Produce</h3>

                <div className="produce-grid">
                    {economyData.produce.map((item, index) => (
                        <div className="produce-card" key={index}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

             <Footer/>
            </div>
        </>
    );
}
