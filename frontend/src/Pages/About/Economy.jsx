import React from "react";
import "./Economy.css";
import heroImage from "/src/assets/economy/economy-top.png";
import teaImg from "/src/assets/economy/tea.png";
import pineappleImg from "/src/assets/economy/pineapple.png";
import dragonFruitImg from "/src/assets/economy/dragon.png";
import Footer from "../../Components/Footer/Footer";

export default function Economy() {
    return (
        <>
            <div
                className="economy-hero"
                style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay">
                    <h1>Economy of Kishanganj</h1>
                </div>
            </div>

            <div className="economy-main">
                <div className="economy-wrapper">
                    <p className="intro-text">
                        The economy of Kishanganj, Bihar, is primarily agrarian, driven by tea production, 
                        jute, and paddy cultivation. With over 90% of the population residing in rural areas, 
                        agriculture forms the backbone of the district's economic structure. The district holds 
                        a unique distinction as the only tea-producing district in Bihar. The region also 
                        cultivates various fruits including pineapple and dragon fruit.
                    </p>

                    <div className="section-with-img">
                        <img src={teaImg} alt="Tea Leaves" />
                        <div className="section-text">
                            <h2>Tea Leaves Production</h2>
                            <p>
                                Kishanganj is known as the "Darjeeling of Bihar" with 11 operational tea factories 
                                producing premium quality tea leaves. The district's unique climate and soil conditions 
                                are ideal for tea cultivation, yielding high-quality leaves that are processed locally. 
                                The tea industry employs approximately 15,000 workers in tea gardens and processing facilities. 
                                Annual tea production is estimated at around 8-10 million kilograms. Tea leaves from 
                                Kishanganj are known for their distinctive flavor and aroma, competing with premium varieties 
                                from Darjeeling. The government has identified tea as the flagship product under the One 
                                District One Product (ODOP) initiative, with investments in modern processing techniques 
                                and quality improvement programs.
                            </p>
                        </div>
                    </div>

                    <div className="section-with-img">
                        <img src={pineappleImg} alt="Pineapple Cultivation" />
                        <div className="section-text">
                            <h2>Pineapple Cultivation</h2>
                            <p>
                                Pineapple farming has emerged as a significant horticultural activity in Kishanganj district. 
                                The tropical climate and well-drained soil conditions are favorable for pineapple cultivation. 
                                Local farmers have adopted modern farming techniques to improve yield and quality. Pineapple 
                                cultivation provides an alternative source of income for small and marginal farmers. The fruit 
                                is sold in local markets as well as transported to neighboring states. The district produces 
                                approximately 2,000-3,000 tons of pineapples annually. Recent government initiatives have 
                                focused on setting up cold storage facilities and establishing processing units to add value 
                                to the produce. The sweet and tangy variety grown here is popular in both domestic and regional 
                                markets.
                            </p>
                        </div>
                    </div>

                    <div className="section-with-img">
                        <img src={dragonFruitImg} alt="Dragon Fruit" />
                        <div className="section-text">
                            <h2>Dragon Fruit Farming</h2>
                            <p>
                                Dragon fruit cultivation is a relatively new but promising venture in Kishanganj. Farmers 
                                have started experimenting with this exotic fruit, which has shown excellent growth potential 
                                in the district's climate. Dragon fruit, also known as pitaya, is a high-value crop with 
                                increasing market demand. The fruit is rich in antioxidants and vitamins, making it popular 
                                among health-conscious consumers. Small-scale dragon fruit farms have been established with 
                                support from agricultural extension services. The cultivation requires minimal water and is 
                                resistant to many common pests, making it an economically viable option for farmers. Early 
                                adopters have reported encouraging results, with fruits fetching premium prices in urban 
                                markets. The district agriculture department is providing training and technical support to 
                                interested farmers to expand dragon fruit cultivation.
                            </p>
                        </div>
                    </div>

                    {/* Replaced the generic Agriculture / Industry / Trade sections with a professional Economic Profile */}
                    <div className="section-with-img">
                        <div className="section-text" style={{ width: '100%' }}>
                            <h2>Economic Profile — Kishanganj District</h2>
                            <p>
                                Kishanganj, situated in Bihar's strategically sensitive "Chicken Neck" region, has an
                                economy that remains deeply rooted in agriculture with tea cultivation as its most
                                distinctive activity. Although the district has significant agricultural output, it
                                faces structural development challenges and is classified among the relatively under-
                                developed districts of Bihar.
                            </p>

                            <h3>Key aspects</h3>
                            <ul style={{ lineHeight: 1.9 }}>
                                <li><strong>Agriculture & Tea Production:</strong> Kishanganj is the only district in Bihar
                                    with commercial tea production. Tea picking and primary processing provide direct
                                    employment to thousands, and tea has been identified as a flagship product under
                                    the One District One Product (ODOP) initiative.</li>
                                <li><strong>Rural-Based Economy:</strong> Around 90% of the district's population lives in
                                    rural areas, making the economy heavily dependent on smallholder and subsistence
                                    farming.</li>
                                <li><strong>Fisheries:</strong> Fish farming is an important livelihood in parts of the
                                    district, with numerous local cooperatives and community-level aquaculture projects
                                    supporting income diversification.</li>
                                <li><strong>Logistics & Strategic Connectivity:</strong> Located on National Highway 31 and
                                    served by the Northeast Frontier Railway, Kishanganj functions as a regional trade
                                    node within the Purnia division; this connectivity underpins local markets and
                                    cross-border movements toward West Bengal and Nepal.</li>
                                <li><strong>Socio-economic Challenges:</strong> Despite agricultural strengths, the district
                                    remains economically vulnerable — limited industrialization, constrained access to
                                    high-value processing, low per-capita income, and gaps in infrastructure and human
                                    development indicators contribute to persistent poverty.</li>
                            </ul>

                            <h3>Policy & Development Opportunities</h3>
                            <p>
                                Targeted interventions that can strengthen the local economy include expanding
                                value-added processing for tea and horticultural crops, improving cold-chain and
                                market access for high-value fruits (pineapple, dragon fruit), scaling sustainable
                                aquaculture, and leveraging transport corridors to integrate producers with larger
                                regional markets. Investments in skills, extension services, and cooperative models
                                will be central to inclusive growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
