import './App.css';
import { Routes, Route } from "react-router-dom";

// Components
import { Navigation } from './components'
// Pages
import { Home, About, NoMatch } from './pages'

function App() {

    return (
        <div className="App">
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
