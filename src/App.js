import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout/Layout";
import Home from "./sections/Home/Home";
import Portfolio from './sections/Portfolio/Portfolio';


function App() {
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
