import './App.css'
import { useState } from 'react'

function App() {
    const [q1, setQ1] = useState("")
    const [q2, setQ2] = useState("")
    const [q3, setQ3] = useState("")
    const [q4, setQ4] = useState("")
    const [q5, setQ5] = useState("")

    const handleSubmit = () => {
        if (q1 == 17972 && q2 == 82 && q3 == "flak bait" && q4 == 194 && q5 == "concorde") {
            // Can be replaced with next step of puzzle
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }
        else {
            window.alert("No cigar, Big Boss")
        }
    };

    return (
        <div>
            <div>
                <h1 className='text-center text-justify'>If you've found your way to this page, you're on the right page</h1>
                <h2>The only place you can continue an after practice tradition, then see the minecraft movie at max less than 40 steps away, all this and that's not the main attraction, although a lot of it is a bit old fashioned.</h2>
                <h3>Below Spy Skunk (5 numbers):</h3>
                <input type="text" id="q1" value={q1} onChange={(e) => setQ1(e.target.value)} placeholder=" " />

                <h3>Two suns twice over japan (two numbers):</h3>
                <input type="text" id="q2" value={q2} onChange={(e) => setQ2(e.target.value)} placeholder=" " />

                <h3>I'm named like a dog but not quite as mean, flying that many missions it was hard to keep me clean, inferior aim but a great sitting duck, they ask me how can one bird have so much luck. But not all things last and as l am now torn apart, I sit in a hanger someday to restart, while the paint on my hull makes great t shirt art (4 letters, space, 4 letters, no caps):</h3>
                <input type="text" id="q3" value={q3} onChange={(e) => setQ3(e.target.value)} placeholder=" " />

                <h3>Shark at 12 o'clock with his blue buddy (3 numbers):</h3>
                <input type="text" id="q4" value={q4} onChange={(e) => setQ4(e.target.value)} placeholder=" " />

                <h3>Businessmen loved me because I saved them a whole lot of time, tickets weren't cheap but I was top of the line, I didn't fly long and I sure was loud. Not the center of attention but almost just as fast, a little bit bigger and a lot more class. (8 letters, no caps):</h3>
                <input type="text" id="q5" value={q5} onChange={(e) => setQ5(e.target.value)} placeholder=" " />
                <br></br>
                <br></br>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default App
