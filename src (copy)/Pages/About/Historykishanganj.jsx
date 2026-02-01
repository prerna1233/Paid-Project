import React from "react";
import "./Historykishanganj.css";
import Footer from "../../Components/Footer/Footer";
// import history from "../../assets/Aboutpage/art1.png";
 function Historykishanganj() {
    

    return (
        <>
       <div className='hero-history'>
        <img src="/src/assets/7pic.webp" 
        alt="Traditional Food"
         className='culture-img1' />
      </div>

      <hr></hr>
          
      
         <div className="history-container">

      <h1 className="history-title">History of Kishanganj</h1>

      <h2 className="history-subtitle">Pre-Independence:</h2>

      {/* First Image + Text */}
      <div className="history-row">
        <img
          src="/src/assets/image1.jpg"
          alt="Old Kishanganj"
          className="history-img-left"
        />

        <div className="history-text">
          <p>
            Kishanganj is a historic town located in the northeastern part of
            Bihar. Before India’s independence, Kishanganj formed a part of the
            larger Purnia district. Due to its strategic location near present-day
            West Bengal, Nepal, and Bangladesh, the region gained importance as
            a center of settlement, trade, and administration.
          </p>

          <p>
            The region has been inhabited since ancient times by agricultural
            communities who depended on fertile land and river systems such as
            the Mahananda. Over time, Kishanganj became a transit zone connecting
            Bengal with North Bihar and Nepal.
          </p>

          <p>
            During medieval times, the area was influenced by rulers of Bengal
            and Mithila. Islamic culture spread through trade and migration,
            contributing to the diverse cultural identity of Kishanganj.
          </p>
        </div>
      </div>

      {/* Long Paragraph */}
      <p className="history-text">
        With the expansion of the Mughal Empire, Kishanganj emerged as an
        important market area. The word “ganj” refers to a marketplace,
        highlighting its commercial importance. Mughal administration
        encouraged agriculture and trade, helping the region grow economically.
      </p>

      {/* Right Image */}
      <img
        src="/src/assets/oldindependent.avif"
        alt="Old Road"
        className="history-img-right"
      />

      <p className="history-text">
        During British rule, Kishanganj came under the administration of the East
        India Company as part of the Purnia district. The British focused on
        revenue collection, infrastructure, and border security due to the
        region’s proximity to Nepal and Bengal.
      </p>

      <p className="history-text">
        Railway connectivity and road networks were developed to serve colonial
        interests. However, local farmers faced difficulties due to heavy taxes
        and land revenue policies imposed by the British administration.
      </p>

      <p className="history-text">
        After India gained independence in 1947, Kishanganj remained a subdivision
        of Purnia district. Continuous demands by local leaders and citizens led
        to the formation of a separate district on 14 January 1990.
      </p>

      {/* Bullet Points */}
      <ul className="history-list">
        <li>
          Strategic importance due to its border location.
        </li>
        <li>
          Served as an administrative and trade center.
        </li>
        <li>
          Played a role in regional cultural exchange.
        </li>
      </ul>

    </div>
    <Footer/>
        </>
    );
}

export default Historykishanganj;