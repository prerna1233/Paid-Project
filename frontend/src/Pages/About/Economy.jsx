import React from "react";
import "./Economy.css";
import heroImage from "/src/assets/kishan.jpg";
import teaImg from "/src/assets/tea.jpeg";
import pineappleImg from "/src/assets/pineapple.webp";
import dragonFruitImg from "/src/assets/5pic.jpg";
import riceImg from "/src/assets/Bihar-cultivating-rice.jpg";
import juteImg from "/src/assets/JUTE.png";
import maizeImg from "/src/assets/sirimart_maize.jpg";
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

                    <div className="section-with-img">
                        <img src={riceImg} alt="Agriculture" />
                        <div className="section-text">
                            <h2>Agriculture</h2>
                            <p>
                                Agriculture is the mainstay of Kishanganj's rural economy. The primary crops include rice, 
                                wheat, maize, and jute. Rice cultivation covers approximately 65% of the total cultivated 
                                area, making it the principal crop. Wheat and maize are grown during the rabi season, while 
                                jute cultivation has been a traditional occupation. Farmers sell their produce in weekly 
                                haats (local markets) and mandis (agricultural marketing centers) across the district.
                            </p>
                        </div>
                    </div>

                    <div className="section-with-img">
                        <img src={juteImg} alt="Jute Processing" />
                        <div className="section-text">
                            <h2>Industrial Activities</h2>
                            <p>
                                Beyond tea factories, Kishanganj has developed small-scale industries and agricultural 
                                marketing centers. The district hosts approximately 50-60 small and medium enterprises 
                                engaged in rice milling, jute processing, food processing, and handicraft production. 
                                These industries provide employment to around 5,000-7,000 people. Recent initiatives focus 
                                on traditional industries like fishing, with several fish farming cooperatives established 
                                in rural areas.
                            </p>
                        </div>
                    </div>

                    <div className="section-with-img">
                        <img src={maizeImg} alt="Trade and Commerce" />
                        <div className="section-text">
                            <h2>Trade and Commerce</h2>
                            <p>
                                Due to its strategic location near West Bengal and Nepal, Kishanganj serves as a hub for 
                                trade and commerce. The district is well-connected by the Northeast Frontier Railway, with 
                                Kishanganj Junction as a major railhead on the Katihar-Siliguri route. National Highway 31 
                                passes through the district, facilitating movement of goods. The proximity to Nepal enables 
                                cross-border trade opportunities. The district has 3 major wholesale markets and approximately 
                                200 retail outlets.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
