import image_1 from "../../images/OurClient/image-1.png";
import left_arrow from "../../images/OurClient/left-arrow.svg";
import polygon from "../../images/OurClient/polygon.svg";
import right_arrow from "../../images/OurClient/right-arrow.svg";
import "./OurClient.scss";
const OurClient = () => {
    return (
        <main id="our_client">
     
            <div className="client_content">
                <div className="container client_container">
                    <div className="client_wrapper">
                        <div className="client_left_box">
                            <img
                                className="review_polygon"
                                src={polygon}
                                alt=""
                            />
                            <div className="client_left_inner">
                                <h2>Our Client</h2>
                                <p>
                                    “They are very kind, patient and flexible. They are reliable and we love working with them so much, that we have already started project number two with them. I also referred someone else to them.”
                                </p>
                                <div className="name">
                                    <h4>Imrul Kayes</h4>
                                    <p>Senior Product Designer Hadiyat</p>
                                </div>
                                <div className="review_arrow">
                                    <img src={left_arrow} alt="" />
                                    <img src={right_arrow} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="client_right_box">
                            <div className="client_right_inner">
                                <img src={image_1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OurClient;
