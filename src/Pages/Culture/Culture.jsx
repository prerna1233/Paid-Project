import React from 'react'
import './Culture.style.css'
import 'animate.css';
import Footer from '../../Components/Footer/Footer';

function Culture() {
  return (
    <div className="culture-hero">

      <img src="/src/assets/puja1.jpg" alt="Culture" className="hero-image" />

      <div className="culture-page-text">
        {/* <h1>Culture of Kishanganj</h1> */}
        {/* <h1 className="typewriter-text">Culture of Bihar</h1> */}
        <span className='animation1'>C</span>
        <span className='animation2'>u</span>
        <span className='animation3'>l</span>
        <span className='animation4'>t</span>
        <span className='animation5'>u</span>
        <span className='animation6'>r</span>
        <span className='animation7'>e</span>
        <span className='animation8'>&nbsp;</span>
        <span className='animation9'>o</span>
        <span className='animation10'>f</span>
        <span className='animation11'>&nbsp;</span>
        <span className='animation12'>B</span>
        <span className='animation13'>i</span>
        <span className='animation14'>h</span>
        <span className='animation15'>a</span>
        <span className='animation16'>r</span>
      </div>
      <hr className='her'></hr>

      <div className='jhijiya main-info'>
        <img src='src/assets/jhijhiya.jpeg' alt='Jhijhiya-dance' className='culture-page-img' />

        <div className='content'>
          <h2 className='headings'>Iconic Folk Dances of Bihar</h2>

          <p className='main-info-text'>Jhijhiya is a sacred folk dance from North Bihar, performed during Durga Puja and Dussehra.
            Women balance pots with lamps on their heads while dancing gracefully.
            The dance is accompanied by traditional songs and rhythmic beats.
            It reflects the spiritual beliefs and devotion of the people of Bihar.
            Jhijhiya also shows community bonding and cultural celebration.
            This dance is a vibrant symbol of Bihar’s rich heritage and traditions.</p>
        </div>
      </div>

      <div className='chatpuja  main-info'>
        <img src='src/assets/chatpuja.jpeg' alt='chatpuja-dance' className='culture-page-img' />

        <div className='chatpuja-text content'>
          <h2 className='headings'>The Sacred Festival of Bihar</h2>

          <p className='main-info-text'>Chhath Puja is a famous and important festival of Bihar.
            It is celebrated to worship the Sun God (Surya Dev) and Chhathi Maiya.
            People believe that the Sun God gives life, energy, and good health to all
            living beings. This festival is observed to thank the Sun God for his blessings and
            to pray for happiness, prosperity, and the well-being of family members. Chhath Puja
            is celebrated with great devotion, fasting, and offering prayers near
            rivers and ponds. It reflects the culture, tradition, and faith of
            the people of Bihar and is known for its discipline, purity, and simplicity.</p>
        </div>
      </div>
      <div className='jhijhiya main-info'>
        <img src='src/assets/pineapple.jpeg' alt='pineapple' className='culture-page-img' />

        <div className='Nature-text'>
          <h2 className='headings'>Golden Pineapple of Nature</h2>

          <p className='main-info-text'>Kishanganj has emerged as the undisputed Pineapple Capital of Bihar, leveraging its unique agro-climatic conditions to produce over 1 lakh tonnes of the fruit annually. The district's success is centered in the Thakurganj and Pothia blocks, where the humid climate and acidic soil provide the perfect environment for both the Queen and Kew varieties to thrive. This massive production scale has transformed the local economy, shifting farmers from traditional paddy cultivation to high-value horticulture. Under the "One District One Product" initiative.</p>
        </div>
      </div>
      <hr className='her'></hr>
      <Footer />
    </div>
  )
}

export default Culture;


