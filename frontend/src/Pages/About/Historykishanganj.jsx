import React from "react";

import Footer from "../../Components/Footer/Footer";
function Historykishanganj() {
  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', paddingBottom: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 32, maxWidth: 1200, margin: '0 auto', paddingTop: 32 }}>
        {/* Left Column: Map and Cards */}
        <div style={{ flex: '0 0 420px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* Map Image - Always Visible at Top, above all cards */}
          <div style={{ width: '100%', marginBottom: 24 }}>
            <img src="/assets/map.png" alt="Kishanganj District Map" style={{ width: '100%', maxHeight: 260, objectFit: 'contain', borderRadius: 8, boxShadow: '0 2px 8px #1976d2', border: '2px solid #1976d2', background: '#fff', display: 'block' }} />
          </div>
          {/* Cards Under Map */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            {/* District Info Card */}
            <div style={{ border: '1px solid #1976d2', borderRadius: 8, background: '#fff', padding: 16, marginBottom: 0, width: '100%' }}>
              <h2 style={{ color: '#b71c1c', fontWeight: 700, fontSize: '2.2rem', textAlign: 'center', margin: 0 }}>Kishanganj District</h2>
              <div style={{ fontSize: '1.05rem', marginTop: 16 }}>
                <p><strong>Location:</strong> Northeastern Bihar, India</p>
                <p><strong>Area:</strong> 1,884 square kilometers</p>
                <p><strong>District Formation:</strong> January 14, 1990</p>
                <p><strong>Headquarters:</strong> Kishanganj</p>
                <p><strong>Borders:</strong> Nepal, West Bengal (Uttar Dinajpur & Darjeeling)</p>
                <p><strong>Blocks:</strong> 6 (Kishanganj, Kochadhaman, Dighalbank, Bahadurganj, Thakurganj, Pothia)</p>
              </div>
            </div>
            {/* Info Card */}
            <div style={{ background: '#e3f2fd', borderRadius: 12, boxShadow: '0 2px 8px #90caf9', padding: 24, width: '100%', maxWidth: 420 }}>
              <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px #90caf9', fontSize: '1rem' }}>
                <tbody>
                  <tr><td style={{ fontWeight: 600, color: '#222', padding: '6px 8px' }}>Time zone</td><td style={{ color: '#1976d2', padding: '6px 8px' }}>UTC+5:30 (IST)</td></tr>
                  <tr><td style={{ fontWeight: 600, color: '#222', padding: '6px 8px' }}>PIN</td><td style={{ color: '#1976d2', padding: '6px 8px' }}>855107, 855108</td></tr>
                  <tr><td style={{ fontWeight: 600, color: '#222', padding: '6px 8px' }}>Vehicle registration</td><td style={{ color: '#1976d2', padding: '6px 8px' }}>BR-37</td></tr>
                  <tr><td style={{ fontWeight: 600, color: '#222', padding: '6px 8px' }}>Literacy</td><td style={{ color: '#1976d2', padding: '6px 8px' }}>74.71%</td></tr>
                </tbody>
              </table>
            </div>
            {/* Language Card */}
            <div style={{ background: '#f6fff6', borderRadius: 12, boxShadow: '0 2px 8px #eaf3e6', padding: 24, width: '100%', maxWidth: 420 }}>
              <div style={{ color: '#1b5e20', marginBottom: 16, fontSize: '1.05rem', fontWeight: 600 }}>Languages Spoken in Kishanganj (2011)</div>
              <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px #eaf3e6' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 700 }}>Language</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 700 }}>Percent</th>
                    <th style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 700 }}>Visual</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr><td style={{ color: '#388e3c', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Hindi</td><td>59.8%</td><td><div style={{ background: '#388e3c', height: 18, width: '60%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#d32f2f', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Urdu</td><td>23.1%</td><td><div style={{ background: '#d32f2f', height: 18, width: '23%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#fbc02d', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Bengali</td><td>5.73%</td><td><div style={{ background: '#fbc02d', height: 18, width: '6%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#1976d2', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Surjapuri</td><td>5.60%</td><td><div style={{ background: '#1976d2', height: 18, width: '6%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#7b1fa2', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Maithili</td><td>3.19%</td><td><div style={{ background: '#7b1fa2', height: 18, width: '3%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#ff9800', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Bhojpuri</td><td>2.52%</td><td><div style={{ background: '#ff9800', height: 18, width: '3%', borderRadius: 4 }}></div></td></tr>
                </tbody>
              </table>
              <div style={{ marginTop: 12, fontSize: '0.95em', color: '#333' }}>
                <span style={{ color: '#388e3c', fontWeight: 600 }}>Hindi</span> is the most spoken language, followed by <span style={{ color: '#d32f2f', fontWeight: 600 }}>Urdu</span> and other regional languages.
              </div>
            </div>
            {/* Religion Card */}
            <div style={{ background: '#fffde7', borderRadius: 12, boxShadow: '0 2px 8px #ffe082', padding: 24, width: '100%', maxWidth: 420 }}>
              <div style={{ background: '#ffe082', color: '#222', fontWeight: 700, fontSize: '1.05rem', padding: '4px 12px', borderRadius: 4, marginBottom: 10, width: '100%' }}>Religion in Kishanganj town (2011)</div>
              <table style={{ width: '100%', background: '#fff', borderCollapse: 'collapse', borderRadius: 8, overflow: 'hidden', boxShadow: '0 1px 4px #ffe082' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '10px 18px', fontWeight: 700 }}>Religion</th>
                    <th style={{ textAlign: 'left', padding: '10px 18px', fontWeight: 700 }}>Percent</th>
                    <th style={{ textAlign: 'left', padding: '10px 18px', fontWeight: 700 }}>Visual</th>
                  </tr>
                </thead>
                <tbody>
                 
                    <tr><td style={{ color: '#1976d2', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Hinduism</td><td>55.48%</td><td><div style={{ background: '#ffa726', height: 18, width: '55%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#388e3c', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Islam</td><td>42.67%</td><td><div style={{ background: '#388e3c', height: 18, width: '43%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#3949ab', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Jainism</td><td>1.07%</td><td><div style={{ background: '#e57373', height: 18, width: '1%', borderRadius: 4 }}></div></td></tr>
                    <tr><td style={{ color: '#616161', fontWeight: 600, marginLeft: 10, paddingLeft: 12 }}>Other or not stated</td><td>0.78%</td><td><div style={{ background: '#bdbdbd', height: 18, width: '1%', borderRadius: 4 }}></div></td></tr>
                </tbody>
              </table>
            </div>
            {/* Agriculture Card */}
            <div style={{ background: '#e8f5e9', borderRadius: 12, boxShadow: '0 2px 8px #a5d6a7', padding: 24, width: '100%', maxWidth: 420 }}>
              <div style={{ background: '#a5d6a7', color: '#222', fontWeight: 700, fontSize: '1.05rem', padding: '4px 12px', borderRadius: 4, marginBottom: 10, width: '100%' }}>Agriculture</div>
              <div style={{ color: '#222', fontSize: '1rem', width: '100%' }}>
                <span style={{ fontWeight: 600, color: '#388e3c' }}>Main crops:</span> Rice, wheat, arhar, masoor, and jute.<br/>
                <span style={{ fontWeight: 600, color: '#388e3c' }}>Specialty:</span> Kishanganj is one of the only districts in Bihar to produce <span style={{ fontWeight: 700, color: '#2e7d32' }}>tea</span>.
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: History Content */}
        <div style={{ flex: 1, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px #eaf3e6', padding: '32px 32px 0 32px', marginTop: 0, minHeight: '100%' }}>
          <h2 style={{ color: '#1976d2', fontWeight: 700, fontSize: '2rem', marginBottom: 32, letterSpacing: 1 }}>Historical Overview</h2>
          <div className="history-content-full" style={{ lineHeight: 1.8, fontSize: '1.08rem', color: '#222' }}>
            {/* Section: Formation of the District */}
            <section style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>Formation of the District</h3>
              <p>Kishanganj, located in Bihar's Purnea division, was officially formed as a district on January 14, 1990, after a 17-year struggle. Historically a key subdivision of Purnea, its name derives from "Krishna-Kunj," a reference to Lord Krishna. It has a diverse cultural heritage, with a majority Hindu population and significant Islamic influence that has shaped its unique identity over the centuries.</p>
              <p>The struggle for district status was not merely an administrative demand but represented the collective aspirations of the people for recognition, development, and self-governance. Social workers mobilized communities, politicians raised the issue in various forums, and farmers organized movements to press for their demands. After 17 years of relentless struggle and unwavering determination, the efforts of the people bore fruit when Kishanganj was officially declared a separate district in Bihar on January 14, 1990.</p>
            </section>
            {/* Section: Origin of the Name */}
            <section style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>Origin of the Name</h3>
              <p>The name Kishanganj is derived from "Kishan," which is a variation of Lord Krishna, and "Ganj," a Persian word meaning town or market. Historically, the area was known as "Krishna-Kunj," a designation that was assigned to the region stretching from Kishanganj Gudri to Ramzan Pool Gandhi Ghat. This nomenclature reflects the deep cultural and religious significance of the area, connecting it to Hindu mythology while also embracing Persian linguistic influences that came with various rulers and traders who passed through this region over the centuries.</p>
            </section>
            {/* Section: Geographical Significance */}
            <section style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>Geographical Significance</h3>
              <p>Situated in the northeastern part of Bihar, Kishanganj district is an integral part of the Purnea division. The district's geographical location has always been strategically important, serving as a gateway between Bihar, West Bengal, and Nepal. This unique positioning has made Kishanganj a melting pot of cultures, languages, and traditions, where diverse communities have coexisted and contributed to its rich cultural tapestry.</p>
              <p>The district's proximity to international borders has presented both opportunities and challenges. The proximity to Nepal and West Bengal has facilitated cross-border trade and cultural exchanges, contributing to economic activities and cosmopolitan character of the region. However, it has also necessitated strong border management and security measures.</p>
            </section>
            {/* Section: Cultural and Religious Diversity */}
            <section style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>Cultural and Religious Diversity</h3>
              <p>The cultural and religious landscape of Kishanganj is characterized by remarkable diversity and harmony. According to the 2011 census, the district has a demographic composition with 55.48% of the population being Hindu and 42.67% being Muslim. This significant presence of both major religious communities has created a unique cultural environment where festivals, traditions, and customs from different faiths are celebrated collectively.</p>
              <p>The district is known for its communal harmony, with people from different religious backgrounds living together peacefully and participating in each other's celebrations and social activities. The district celebrates various festivals throughout the year, including Eid, Durga Puja, Holi, Chhath Puja, and others, with equal enthusiasm and participation from all communities. These celebrations not only preserve cultural traditions but also strengthen social bonds and promote communal harmony.</p>
            </section>
            {/* Section: Languages and Linguistic Diversity */}
            <section style={{ marginBottom: 32 }}>
              <h3 style={{ color: '#1976d2', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>Languages and Linguistic Diversity</h3>
              <p>The linguistic landscape of Kishanganj is equally diverse and fascinating. The primary language spoken in the district is Surjapuri, a regional language that serves as the lingua franca for most of the local population. Surjapuri has its roots in the Indo-Aryan language family and reflects the cultural heritage of the region.</p>
              <p>In addition to Surjapuri, Urdu is widely spoken and understood, particularly among the Muslim community and in urban areas. Hindi, being the official language of Bihar, is also commonly used, especially in official communications, education, and media. Bengali is another important language in the district, spoken by communities that have historical and cultural ties with neighboring West Bengal. This multilingual character has enriched the cultural fabric, enabling people to communicate across linguistic barriers and fostering a cosmopolitan atmosphere.</p>
            </section>
            
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Historykishanganj;
