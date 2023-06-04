import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout/Layout";
import Home from "./sections/Home/Home";
import Portfolio from './sections/Portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import React from "react";

function App() {

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            mirror: false
        });

        AOS.refresh();
    }, []);

    

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} >
                        <Route path="/home" element={<Home />} />
                    </Route>
                    <Route path="/projects" element={<Portfolio />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
