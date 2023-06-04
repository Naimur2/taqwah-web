import React from "react";
import service1 from "../../images/Services/Group1.png";
import service2 from "../../images/Services/Group2.png";
import service3 from "../../images/Services/service3.png";

export default function ServicesList() {
    return (
        <div className="max-w-screen w-full !mt-20">
            <div className="flex gap-10 justify-center items-center flex-wrap">
                <div className="min-w-[10rem]" data-aos="fade-up">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.behance.net/gallery/135352469/Minimal-Luxury-Clothing-Web-Landing-page-UI-UX-Design"
                    >
                        <img src={service1} alt="" />
                    </a>
                </div>
                <div className="min-w-[10rem]" data-aos="fade-up">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.behance.net/gallery/134365635/Best-NFT-Marketplace-UI-UX-App-UI-Kit-Design"
                    >
                        <img src={service2} alt="" />
                    </a>
                </div>
                <div className="min-w-[10rem]" data-aos="fade-up">
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
    );
}
