import React from "react";

export default function ServicesTab() {
    return (
        <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="services_btn services-btn" data-aos="fade-up">
                <p>Dashboard UI UX</p>
            </div>
            <div className="services_btn services-btn" data-aos="fade-up">
                <p>Website UI UX</p>
            </div>
            <div className="services_btn services-btn" data-aos="fade-up">
                <p>Mobile App UI UX</p>
            </div>
        </div>
    );
}
