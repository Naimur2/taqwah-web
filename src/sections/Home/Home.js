import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import KnowMore from "../KnowMore/KnowMore";
import OurClient from "../OurClient/OurClient";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";
import Pricing from "../Pricing/Pricing";
import Faq from "../Faq/Faq";
import Process from './../Process/index';

const Home = () => {
    return (
        <main className="h-full w-full">
            <HeaderMain />
            <Services />
            {/* <Process /> */}
            <OurClient />
            {/* <Pricing /> */}
            {/* <Faq /> */}
            <ContactUs />
        </main>
    );
};

export default Home;
