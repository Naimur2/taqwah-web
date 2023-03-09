import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import KnowMore from "../KnowMore/KnowMore";
import OurClient from "../OurClient/OurClient";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";

const Home = () => {
    return (
        <main>
            <HeaderMain />
            <Projects />
            <Services />
            <OurClient />
            <KnowMore />
        </main>
    );
};

export default Home;
