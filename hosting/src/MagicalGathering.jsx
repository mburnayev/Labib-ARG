import { useState } from "react"
import Card from "react-bootstrap/Card";
import "./MagicalGathering.css";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function MagicalGathering() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectionList, setSelectionList] = useState("");

    const cardClickEvent = (cardId) => {
        setSelectedCard(cardId);
        setSelectionList(prevList => prevList + cardId.toString());
    };

    async function handleSubmit() {
        setSelectedCard(null)
        try {
            const baseRef = doc(db, "tqa6VvzSntTO/jiovHHK6a0Ie")
            const snapshot = await getDoc(baseRef)
            const data = snapshot.data()
            
            let foundMatch = false;
            let matchingKey = null;
            
            if (data) {
                for (const key in data) {
                    if (Array.isArray(data[key]) && 
                        data[key].some(item => String(item).trim() === selectionList)) {
                        foundMatch = true;
                        matchingKey = key;
                        break;
                    }
                }
            }

            if (foundMatch) {
                setSelectionList("");
                const redirRef = doc(db, "tqa6VvzSntTO/6yt5wO9ltllt");
                const snapshot = await getDoc(redirRef);
                window.alert(JSON.stringify(snapshot.data()));
            }
            else {
                window.alert("No cigar, Big Boss");
                setSelectionList("");
            }
        } catch (error) {
            console.error("Error fetching db content:", error)
            setSelectionList("")
        }
    };

    return (
        <div>
            <h2 className="text-center text-justify">Make your move...</h2>
            <div className="card-container">
                {[1, 2, 3, 4, 5, 6, 7].map((cardId) => (
                    <Card
                        key={cardId}
                        className={`game-card ${selectedCard === cardId ? "selected" : ""}`}
                        onClick={() => cardClickEvent(cardId)}
                        style={{ cursor: "pointer" }}
                    >
                        <Card.Img variant="top" src={`card${cardId}.png`} />
                    </Card>
                ))}
            </div>
            <div className="wrapper">
                <button className="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default MagicalGathering