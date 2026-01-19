import React from "react";
import "./Historykishanganj.css";


export default function Historykishanganj() {
return (
<div className="history-page">
<div className="container">
{/* Header */}
<h1 className="title">Kishanganj History</h1>
<p className="subtitle">A Historical District of Bihar</p>


{/* Main Section */}
<div className="history-layout">
{/* History Text */}
<div className="history-text">
<p>
Kishanganj is a historically important district located in the
Seemanchal region of Bihar. Due to its location near West Bengal
and Nepal, it has remained a center of trade and cultural exchange
since ancient times.
</p>
<p>
During the medieval period, the region was influenced by local
rulers and later came under the Mughal administration. In the
British era, tea plantations were introduced along with railway
connectivity and administrative development.
</p>
<p>
The people of Kishanganj actively participated in India’s freedom
struggle. After independence in 1947, the district was formed as a
separate district in 1990 after being divided from Purnea.
</p>
<p>
Today, Kishanganj is known for its cultural diversity, greenery,
and historical importance in Bihar.
</p>
</div>


{/* Cards */}
<div className="card-grid">
<div className="card">
<img src="src/assets/bdo.jpeg" alt="Tea Gardens" />
<h3>Tea Gardens of Kishanganj</h3>
</div>
<div className="card">
<img src="src/assets/bdo.jpeg" alt="Freedom Movement" />
<h3>Freedom Movement</h3>
</div>
<div className="card">
<img src="src/assets/bdo.jpeg" alt="Culture" />
<h3>Cultural Diversity</h3>
</div>
<div className="card">
<img src="src/assets/bdo.jpeg" alt="Map" />
<h3>Geographical Importance</h3>
</div>
</div>
</div>


{/* Timeline */}
<div className="timeline">
<h2>Historical Timeline</h2>
<ul>
<li>Ancient Period – Forest region and trade routes</li>
<li>Medieval Period – Local rulers and Mughal influence</li>
<li>British Era – Tea plantations and railway development</li>
<li>1947 – Participation in India’s Independence</li>
<li>1990 – Formation of Kishanganj District</li>
</ul>
</div>
</div>
</div>
);
}