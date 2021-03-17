import React, {useState} from 'react'
import './App.css'

function App() {
    const [good, setGoodCount] = useState(0)
    const [neutral, setNeutralCount] = useState(0)
    const [bad, setBadCount] = useState(0)
    const [all, setAllCount] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const calcAverage = () => (good - bad) / all
    const calcPositivePercent = () => (good / all) * 100 + '%'

    const goodClick = () => {
        setGoodCount(good + 1)
        setAllCount(all + 1)
        setAverage(calcAverage())
        setPositive(calcPositivePercent())
    }
    const neutralClick = () => {
        setNeutralCount(neutral + 1)
        setAllCount(all + 1)
        setAverage(calcAverage())
        setPositive(calcPositivePercent())
    }
    const badClick = () => {
        setBadCount(bad + 1)
        setAllCount(all + 1)
        setAverage(calcAverage())
        setPositive(calcPositivePercent())
    }

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
            <p>all {all}</p>
            <p>average {average}</p>
            <p>positive {positive}</p>
        </>
    )
}

export default App
