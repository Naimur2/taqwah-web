import React from "react";
import BottomTabs from "../BottomTabs/BottomTabs";
import Footer from "../Footer/Footer";

import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navbar from "../Navbar/TopNavbar";
import useWindow from "../../hooks/useWindow";

export default function Layout({ children }) {
    const { isLessThan } = useWindow();
    return (
        <ScrollToTop>
            <Navbar />
            {children}
            <Footer />
            {isLessThan("xl") ? <BottomTabs /> : null}
        </ScrollToTop>
    );
}
