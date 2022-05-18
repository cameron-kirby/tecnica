import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import { Navigation, Footer, ScrollToTop } from './components'
// Pages
import { Home, About, NoMatch } from './pages'

function App() {

    return (
        <div className="App">
            <Navigation/>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </ScrollToTop>
            <Footer/>
        </div>
    );
}

export default App;
