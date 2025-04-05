import Home from "./Home";
import MagicalGathering from "./MagicalGathering";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/magic" element={<MagicalGathering />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;