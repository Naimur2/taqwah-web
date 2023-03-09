import { Link } from "react-router-dom";
import arrow_1 from "../../images/Portfolio/arrow-1.svg";
import image_1 from "../../images/Portfolio/image-1.png";
import image_2 from "../../images/Portfolio/image-2.png";
import image_3 from "../../images/Portfolio/image-3.png";
import image_4 from "../../images/Portfolio/image-4.png";
import image_5 from "../../images/Portfolio/image-5.png";
import image_6 from "../../images/Portfolio/image-6.png";
import image_7 from "../../images/Portfolio/image-7.png";
import image_8 from "../../images/Portfolio/image-9.png";
import side_arrow from "../../images/Portfolio/left-arrow.png";
import polygon from "../../images/Portfolio/polygon.svg";
import "./Portfolio.scss";

const Portfolio = () => {
    return (
        <main id="portfolio">
            <div className="portfolio_content">
                <img src={side_arrow} alt="" className="side_arrow" />
                <div className="container">
                    <div className="portfolio_header">
                        <Link to="/">
                            <img src={arrow_1} alt="" /> <span>Back</span>
                        </Link>
                        <p>
                            The Award-Wining team creating projects
                            <svg
                                width="198"
                                height="100"
                                viewBox="0 0 398 161"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.79687 158.027C4.99402 21.5827 148.379 45.1087 227.321 79.0047C310.828 114.861 395.906 90.3069 395.906 0.970215"
                                    stroke="#070038"
                                    strokeWidth="2.8"
                                />
                                <path
                                    d="M1.67969 150.663L9.6811 158.661L17.6797 150.663"
                                    stroke="#070038"
                                    strokeWidth="2.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </p>
                    </div>
                    <div className="header_text">
                        <h1>
                            THE <span className="text_color">WORK</span> WE DO
                            AND THE
                            <span className="text_color"> PEOPLE</span> WE
                            <span className="text_color"> HELP</span>
                        </h1>
                    </div>
                    <div className="portfolio_wrapper">
                        <div className="portfolio_blocks">
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/135352469/Minimal-Luxury-Clothing-Web-Landing-page-UI-UX-Design"
                                >
                                    {" "}
                                    <img src={image_1} alt="" />
                                </a>
                            </div>
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/134365635/Best-NFT-Marketplace-UI-UX-App-UI-Kit-Design"
                                >
                                    {" "}
                                    <img src={image_2} alt="" />
                                </a>
                            </div>
                            <img className="polygon_1" src={polygon} alt="" />
                        </div>
                        <div className="portfolio_blocks">
                            <img className="polygon_2" src={polygon} alt="" />
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/140346473/NFTX-NFT-Light-Dark-Mode-Mobile-app-UI-Kit"
                                >
                                    {" "}
                                    <img src={image_3} alt="" />
                                </a>
                            </div>
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/138030333/NFT-Drak-Landing-Page-UIUX-Design-Free-Download"
                                >
                                    {" "}
                                    <img src={image_4} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="portfolio_blocks">
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/142328153/Modern-Real-Estate-Web-UI-UX-Landing-Page-Design"
                                >
                                    {" "}
                                    <img src={image_5} alt="" />
                                </a>
                            </div>
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/142707841/Best-Trending-Travel-Mobile-App-UI-UX-Design-UI-Kit"
                                >
                                    {" "}
                                    <img src={image_6} alt="" />
                                </a>
                            </div>
                            <img className="polygon_3" src={polygon} alt="" />
                        </div>
                        <div className="portfolio_blocks">
                            <img className="polygon_4" src={polygon} alt="" />

                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/140475327/NFT-Cryptocurrency-Exchange-Marketplace-Dashboard"
                                >
                                    {" "}
                                    <img src={image_7} alt="" />
                                </a>
                            </div>
                            <div className="portfolio_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/142045613/Best-Trending-NFT-Marketplace-Mobile-App-UI-UX-Design"
                                >
                                    {" "}
                                    <img src={image_8} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
