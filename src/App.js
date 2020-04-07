import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
//import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
    return (
        <Router>
            <div>
                {/* <Header /> */}
                <Navbar />
                <Route exact path="/" component={About} />
                <Route exact path="/about" component={About} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/resume" component={Resume} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
