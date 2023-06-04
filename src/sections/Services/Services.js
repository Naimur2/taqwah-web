import ServicesTab from "../../layout/Services/ServicesTab";
import ServicesList from './../../layout/Services/ServicesList';
import "./Services.scss";

const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div id="service">
                    <div className="service-main mb-4">
                        <h1>Services</h1>
                    </div>
                   <ServicesTab />
                   <ServicesList />
                </div>
            </div>
        </section>
    );
};

export default Services;
