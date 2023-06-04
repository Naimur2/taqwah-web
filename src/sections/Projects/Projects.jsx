import { useNavigate } from "react-router-dom";
import image_1 from "../../images/HeaderMain/image-1.png";
import image_3 from "../../images/HeaderMain/image-2.png";
import image_2 from "../../images/Projects/image-2.png";
import vector from "../../images/Projects/vector.png";
import "./Projects.scss";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section id="projects">
            <div className="container">
                <div className="projects_content">
                    <div className="projects_wrapper">
                        <div className="projects_box">
                            <div className="projects_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/138030333/NFT-Drak-Landing-Page-UIUX-Design-Free-Download"
                                >
                                    <img src={image_1} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="projects_box">
                            <div className="projects_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://ui8.net/taqwah/products/nft-market-uiux?status=6"
                                >
                                    <img src={image_2} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="projects_box">
                            <div className="projects_image">
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.behance.net/gallery/140475327/NFT-Cryptocurrency-Exchange-Marketplace-Dashboard"
                                >
                                    <img src={image_3} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="inner_div">
                        <div>
                            <button
                                className="projects_btn"
                                onClick={() => {
                                    navigate("/projects");
                                }}
                            >
                                View All
                            </button>
                        </div>
                        <div className="projects_footer">
                            <h2>Projects</h2>
                            <img src={vector} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
