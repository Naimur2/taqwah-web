import React from "react";
import BottomTabs from "../BottomTabs/BottomTabs";
import Footer from "../Footer/Footer";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navbar from "../Navbar/TopNavbar";

export default function Layout({ children }) {
    return (
        <ScrollToTop>
            <Navbar />
            {children}
            <Footer />
            <BottomTabs />
        </ScrollToTop>
    );
}
