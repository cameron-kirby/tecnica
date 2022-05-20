import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import { MobileNav, Navigation, Footer, ScrollToTop } from './components'
// Pages
import { Home, About, Services, Projects, NoMatch, UnderConstruction } from './pages'
// Project
import Project from './pages/Projects/Project/Project'

function App() {
    const [navOpen, setNavOpen] = useState(false); // Mobile Nav state

    return (
        <div className="App">
            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}/>
            <Navigation/>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                        <Route path="/services/soil" element={<UnderConstruction />} />
                        <Route path="/services/abatement" element={<UnderConstruction />} />
                        <Route path="/services/demolition" element={<UnderConstruction />} />
                    <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:projectName" element={<Project />}/> 
                    <Route path="/news" element={<UnderConstruction />} />
                    <Route path="/contact" element={<UnderConstruction />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </ScrollToTop>
            <Footer/>
        </div>
    );
}

export default App;
