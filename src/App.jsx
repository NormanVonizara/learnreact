import {Input} from "./components/forms/Input.jsx";
import {useEffect, useState} from "react";

function App () {

    const [duration, setDuration] = useState(5)
    const [secondsLeft, setSecondsLeft] = useState(duration)

    const handleChange = (v) => {
        setDuration(v)
        setSecondsLeft(v)
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setSecondsLeft(v => v - 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [duration]);

    return <div className="vstack gap-2">
        <Input
            value={duration}
            onChange={handleChange}
            placeholder="Timer..."
        />
        <p>
            Décompte : {secondsLeft}
        </p>
    </div>
}

export default App