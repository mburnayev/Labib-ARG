import Home from "./Home";
import MagicalGathering from "./MagicalGathering";
import Dud from "./Dud";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const baseRef = doc(db, "tqa6VvzSntTO/wNYcIwPw80xsyjB2MBXO")
const snapshot = await getDoc(baseRef)
const path = JSON.stringify(snapshot.data()).split(":")[1].substring(1,18)

function App() {
    return (
        <Router>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/magic" element={<Dud />} />
                    <Route path={`${path}`} element={<MagicalGathering />} />
                </Routes>
            </div>
        </Router>
    );
}

export { path }
export default App