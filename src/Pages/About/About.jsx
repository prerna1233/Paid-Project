import React from 'react'
import './About.style.css'
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/Button/Readmore';
// import {link} from "react-router-dom";

export default function About() {
  return (
    <>
      <div className='first'>
        <img src="/src/assets/tea.jpeg" alt="Traditional Food" className='culture-img1' />
      </div>
      <hr></hr>

      <div className="about-intro">
        {/* LEFT IMAGE GRID */}
        <div className="about-images">
          <img src="src/assets/1pic.png" alt="Camel" />
          <img src="src/assets/2pic.png" alt="Temple" />
          <img src="src/assets/3pic.png" alt="Lion" />
          <img src="src/assets/4pic.webp" alt="Culture" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="small-title">About Us</span>
          <h2>
            Welcome to <span>Kishanganj Tour Package</span>
          </h2>

          <h4>A Journey Through History, Culture, and Nature</h4>

          <p>
            Kishanganj, a land of lush greenery, serene rivers, and rich cultural harmony, is a beautiful destination in Bihar. Known for its tea gardens, peaceful environment, and simple lifestyle, Kishanganj offers a soothing travel experience for nature lovers and cultural explorers.
          </p>
          {/* <Button /> */}
          {/* <Link to="/Culture"> */}
            <Button />
          {/* </Link> */}
        </div>

      </div>

      <div className='pagetex'>
        <div class="page-wrapper">

          <div class="about-card">

            <h2>Discover the Beauty of Kishanganj</h2>
            <p>
              Kishanganj, located in the northeastern part of Bihar, is known for its lush green landscapes,
              peaceful environment, and rich cultural diversity. Surrounded by tea gardens, rivers, and hills,
              Kishanganj offers a refreshing experience for travelers looking for nature, culture, and simplicity.
            </p>

          </div>

          <div class="about-card">
            <h2>History & Culture of Kishanganj</h2>
            <p>
              Kishanganj has a unique historical and cultural identity. The district reflects a beautiful blend
              of different communities and traditions. The influence of local tribal culture, folk music,
              and traditional festivals can be seen in daily life. Kishanganj is also known for its harmony
              and peaceful coexistence among people of different backgrounds.
            </p>

          </div>

          <div class="about-card">
            <h2>Explore Places in Kishanganj</h2>
            <ul>
              <li><b>Tea Gardens</b> – Kishanganj is famous for its vast tea plantations, offering scenic views and fresh air.</li>
              <li><b>Mahananda River</b> – A calm and beautiful river that adds to the natural charm of the district.</li>
              <li><b>Local Markets</b> – Experience the simple lifestyle, local food, and culture of Kishanganj.</li>
            </ul>

          </div>
          <div class="about-card">
            <h2>Nature and Peaceful Environment</h2>
            <ul>
              <li><b>Green Landscapes</b> – Surrounded by greenery, forests, and open fields.</li>
              <li><b>Calm Atmosphere</b> – Ideal for nature lovers and peaceful travel experiences.</li>
              <li><b>Nearby Hills</b> – Close to hilly regions, adding scenic beauty to the area.</li>
            </ul>
          </div>

          <div class="about-card">
            <h2>Highlights of Kishanganj: Nature, Culture, and Peaceful Beauty</h2>
            <p>Kishanganj is a unique blend of lush greenery, cultural harmony, and natural serenity. Known for its beautiful tea gardens, rivers,
              and calm environment,
              Kishanganj offers a refreshing
              travel experience away from crowded tourist destinations. The district is surrounded by forests, open fields, and scenic landscapes that make it ideal for nature lovers and peaceful exploration.</p>

          </div>

          <div class="about-card">
            <h2>Experience the Serenity of Tea Gardens and Natural Landscapes</h2>
            <p>Kishanganj is famous for its vast tea plantations, which create breathtaking green views and a peaceful atmosphere. Walking through the tea gardens, enjoying the fresh air, and observing local tea cultivation is a soothing experience. The nearby rivers and open countryside add to the natural charm, making Kishanganj a perfect destination for relaxation and nature photography.</p>
          </div>

          <div class="about-card">
            <h2>Taste the Flavours of Kishanganj: Local Foods to Try</h2>
            <ul>
              <li><b>Litti Chokha</b> –A popular local dish enjoyed with roasted vegetables.</li>
              <li><b>Rice and Dal</b> – A staple meal reflecting the simple lifestyle of the region.</li>
              <li><b>Local Sweets</b> – raditional homemade sweets prepared during festivals.</li>
              <li><b>Tea from Local Gardens</b> – Freshly brewed tea made from locally grown tea leaves.</li>
            </ul>
          </div>



        </div>

      </div>


      <Footer />
    </>


  )
}
