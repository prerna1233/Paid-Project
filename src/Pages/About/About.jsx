import React from 'react'
import './About.style.css'
import Footer from '../../Components/Footer/Footer';
import WhoIsWho from "./WhoIsWho/WhoIsWho.jsx";

export default function About() {
  return (
    <>
      <div className='first'>
        <img src="src/assets/bg-about.jpg" alt="Traditional Food" className='culture-img1' />
      </div>
      <hr className="bottom-hr" />

      <div className="heading1">
        <h1>Leadership &  Administration</h1>
      </div>
    
        <div className="aboutusphoto">
      <div className="SEO">
        <img src="src/assets/bdo.jpeg" alt="SEO Image" />
        <h1>BDO</h1>
        <p>Mr. Amarjit Kumar singh</p>
        <p>
          District Magistrate is officer of the district. The DM is responsible for maintaining law , implementing government policies.
          <br />
          <span>vishakrajDM@gmail.com</span>
        </p>
      </div>

      <div className="CEO">
        <img src="src/assets/CEO.jpg" alt="CEO Image" />
        <h1>CEO</h1>
        <p>Mr. Indradeo Paswan </p>
        <p>
          District Magistrate is officer of the district. The DM is responsible for maintaining law , implementing government policies.
          <br />
          <span>vishakrajDM@gmail.com</span>
        </p>
      </div>


      <div className="IAS">
        <img src="src/assets/DM.jpeg" alt="SEO Image" />
        <h1>DM</h1>
        <p>Mr. Vishal Raj</p>
        <p>
          District Magistrate is officer of the district. The DM is responsible for maintaining law , implementing government policies.
          <br />
          <span>vishakrajDM@gmail.com</span>
        </p>
      </div>
    </div>



    <div className="disigners">
      <div className="figma">
        {/* <img src="src/assets/team.jpeg" alt="team image" /> */}
        <h1>Ux/Figma designer Team </h1>
        <p>Our Figma designers Team focuses on clean , accessible, and user-friendly interfaces for digital platform <span> Moni Kumari , Sweta , Suman</span> collaboratively design structured  layouts, mantain visual 
        consistency, and ensure clarity in user experience. Their combind efforts support effective communication, usability, and modern design standards across the project.
          </p>
      </div>
    </div>
    
    <Footer/>
    </>


  )
}
