import "./Home.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { path } from "./App"

function Home() {
    const [q1, setQ1] = useState("")
    const [q2, setQ2] = useState("")
    const [q3, setQ3] = useState("")
    const [q4, setQ4] = useState("")
    const [q5, setQ5] = useState("")
    var sfx = new Audio("rev.mp3")
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (q1 == 17972 && q2 == 82 && q3 == "flak bait" && q4 == 194 && q5 == "concorde") {
            navigate(path);
        }
        else {
            window.alert("No cigar, Big Boss")
        }
    };

    return (
        <div>
            <div>
                <h2 className="text-center text-justify">If you've found your way to this page, you're on the right page</h2>
                <h3>The only place you can continue an after practice tradition, then see the minecraft movie at max less than 40 steps away, all this and that's not the main attraction, although a lot of it is a bit old fashioned.</h3>
                <h4>Below Spy Skunk (5 numbers):</h4>
                <input type="text" id="q1" value={q1} onChange={(e) => setQ1(e.target.value)} placeholder=" " />

                <h4>Two suns twice over japan (two numbers):</h4>
                <input type="text" id="q2" value={q2} onChange={(e) => setQ2(e.target.value)} placeholder=" " />

                <h4>I'm named like a dog but not quite as mean, flying that many missions it was hard to keep me clean, inferior aim but a great sitting duck, they ask me how can one bird have so much luck. But not all things last and as l am now torn apart, I sit in a hanger someday to restart, while the paint on my hull makes great t shirt art (4 letters, space, 4 letters, no caps):</h4>
                <input type="text" id="q3" value={q3} onChange={(e) => setQ3(e.target.value)} placeholder=" " />

                <h4>Shark at 12 o'clock with his blue buddy (3 numbers):</h4>
                <input type="text" id="q4" value={q4} onChange={(e) => setQ4(e.target.value)} placeholder=" " />

                <h4>Businessmen loved me because I saved them a whole lot of time, tickets weren't cheap but I was top of the line, I didn't fly long and I sure was loud. Not the center of attention but almost just as fast, a little bit bigger and a lot more class. (8 letters, no caps):</h4>
                <input type="text" id="q5" value={q5} onChange={(e) => setQ5(e.target.value)} placeholder=" " />
                <br></br>
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <img src="heavy.png" width="150" height="150" onClick={() => sfx.play()} style={{ float: "right", transform: "translateX(-80px)" }} />
            <h4>Location hint ----------------------------------------------------------------------------------------------------------------------------------------------&gt;</h4>

        </div>
    );
}

export default Home
