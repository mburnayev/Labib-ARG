import { useState } from "react"
import Card from "react-bootstrap/Card";
import "./MagicalGathering.css"; // Make sure to import the CSS

function MagicalGathering() {
    // State to track which card is selected
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectionList, setSelectionList] = useState([]);

    const cardClickEvent = (cardId) => {
        setSelectedCard(cardId);
        setSelectionList(prevList => [...prevList, cardId]);
    };

    const handleSubmit = () => {       
        setSelectedCard(null)
        if (selectionList.toString() == [1, 3, 2, 4, 5, 6, 3, 7].toString() || selectionList.toString() == [1, 3, 4, 2, 5, 6, 3, 7].toString()) {
            setSelectionList([])
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
        else {
            window.alert("No cigar, Big Boss")
            setSelectionList([])
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