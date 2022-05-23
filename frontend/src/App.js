import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import { MobileNav, Navigation, Footer, ScrollToTop } from './components'
// Pages
import { Home, About, Services, Projects, Contact, NoMatch, UnderConstruction } from './pages'
// Project
import Project from './pages/Projects/Project/Project'

function App() {
    const [navOpen, setNavOpen] = useState(false); // Mobile Nav state
    const location = useLocation()
    
    return (
        <div className="App">
            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}/>
            <Navigation/>
            <ScrollToTop>
            <AnimatePresence exitBeforeEnter>
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                        <Route path="/services/soil" element={<UnderConstruction />} />
                        <Route path="/services/abatement" element={<UnderConstruction />} />
                        <Route path="/services/demolition" element={<UnderConstruction />} />
                    <Route path="/projects" element={<Projects />} />
                        <Route path="/projects/:projectName" element={<Project />}/> 
                    <Route path="/news" element={<UnderConstruction />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </AnimatePresence>
            </ScrollToTop>
            <Footer/>
        </div>
    );
}

export default App;
