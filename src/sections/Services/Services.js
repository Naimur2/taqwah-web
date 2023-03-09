import { useState } from "react";
import service1 from "../../images/Services/Group1.png";
import service2 from "../../images/Services/Group2.png";
import arrow1 from "../../images/Services/arrow-1.png";
import arrow from "../../images/Services/arrow.png";
import poly from "../../images/Services/poly.png";
import service3 from "../../images/Services/service3.png";
import data from "./ServiceData";
import "./Services.scss";

const Services = () => {
    const [services, setServices] = useState("1");

    const filterData = data.find((d) => d.id === services);

    return (
        <section id="services">
            <p className="service-title">The Award-Wining team creating</p>
            <div className="service-header">
                <div className="service-arrow">
                    <img src={arrow} alt="arrow" />
                </div>
                <div className="container">
                    <h1>
                        THE RIGHT USER <span>EXPERIENCE</span> FOR{" "}
                        <span>DIGITAL</span> PRODUCT
                    </h1>
                </div>
            </div>
            <div className="container">
                <div id="service">
                    <div className="service-main">
                        <h1>services</h1>
                    </div>
                    <div className="service-name">
                        <div className="services_btn">
                            <p>Dashboard UI</p>
                        </div>
                        <div className="services_btn">
                            <p>Website UI</p>
                        </div>
                        <div className="services_btn">
                            <p>Mobile App UI</p>
                        </div>
                    </div>
                    <div className="service-img">
                        <div className="service-img1">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.behance.net/gallery/135352469/Minimal-Luxury-Clothing-Web-Landing-page-UI-UX-Design"
                            >
                                <img src={service1} alt="" />
                            </a>
                        </div>
                        <div className="service-img2">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.behance.net/gallery/134365635/Best-NFT-Marketplace-UI-UX-App-UI-Kit-Design"
                            >
                                <img src={service2} alt="" />
                            </a>
                        </div>
                        <div className="service-img3">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.behance.net/gallery/140475327/NFT-Cryptocurrency-Exchange-Marketplace-Dashboard"
                            >
                                <img src={service3} alt="" />
                            </a>
                        </div>
                    </div>
                </div>

                <div id="process">
                    <div className="service-polygon">
                        <img src={poly} alt="" />
                    </div>
                    <div className="service-list-contain">
                        <div className="service-list">
                            <div className="service-list-arrow">
                                <img src={arrow1} alt="" />
                            </div>
                            <h1>Our Process</h1>
                            {data.map((dt) => (
                                <p
                                    className="service-list-item"
                                    onMouseEnter={() => setServices(dt.id)}
                                    key={dt.id}
                                >
                                    {dt.title}
                                    <span className="service-svg">
                                        {dt.image}
                                    </span>
                                </p>
                            ))}
                        </div>
                        <div className="service-details">
                            <h1>{filterData && filterData.title}</h1>
                            <p>{filterData && filterData.des}</p>
                            {/* <div className="service-hello-arrow">
                                <img src={arrow3} alt="" />
                            </div> */}
                            <a href="mailto:hellotaqwah@gmail.com">
                                <button className="projects_btn shadow-lg__left">
                                    Say Hello!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
