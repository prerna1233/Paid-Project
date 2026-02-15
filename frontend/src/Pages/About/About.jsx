import React from "react";
import "./About.style.css";
import { aboutData, aboutImage } from "./AboutData";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/Button/Readmore";
import Culture from "../Culture/Culture";


export default function About() {
  return (
    <>
     
      <div className="first">
        <img src="/src/assets/tea.jpeg" alt="Tea Garden" />
      </div>
      <hr />

   
      <div className="about-intro">

      
        <div className="about-images">
          {aboutImage.map((item, index) => (
            <img key={index} src={item.img} alt={item.alt} />
          ))}
        </div>

   
        <div className="about-content">
          <span className="small-title">About Us</span>
          <h2>
            Welcome to <span>Kishanganj Tour Package</span>
          </h2>
          <h4>A Journey Through History, Culture, and Nature</h4>

          <p>
            Kishanganj, a land of lush greenery, serene rivers, and rich cultural harmony,
            is a beautiful destination in Bihar.
          </p>

          <Button link="Culture/Culture"/>
        </div>

      </div>

     
      <div className="pagetex">
        <div className="page-wrapper">

          {aboutData.map((item, index) => (
            <div className="about-card" key={index}>
              <h2>{item.title}</h2>
              {item.content && <p>{item.content}</p>}

              {item.list && (
                <ul>
                  {item.list.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
}
