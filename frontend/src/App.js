import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import { MobileNav, Navigation, Footer, ScrollToTop } from './components'
// Pages
import { Home, About, Projects, NoMatch } from './pages'
// Project
import Project from './pages/Projects/Project/Project'

function App() {
    const [navOpen, setNavOpen] = useState(false); // Nav state

    return (
        <div className="App">
            <MobileNav navOpen={navOpen} setNavOpen={setNavOpen}/>
            <Navigation/>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectName" element={<Project />}/> 
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </ScrollToTop>
            <Footer/>
        </div>
    );
}

export default App;
