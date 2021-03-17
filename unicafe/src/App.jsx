import React, {useState} from 'react'
import './App.css'

function App() {
    const [good, setGoodCount] = useState(0)
    const [neutral, setNeutralCount] = useState(0)
    const [bad, setBadCount] = useState(0)

    const goodClick = () => setGoodCount(good + 1)
    const neutralClick = () => setNeutralCount(neutral + 1)
    const badClick = () => setBadCount(bad + 1)

    return (
        <>
            <h1>give feedback</h1>

            <button onClick={goodClick}>good</button>
            <button onClick={neutralClick}>neutral</button>
            <button onClick={badClick}>bad</button>

            <h1>statistics</h1>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </>
    )
}

export default App
