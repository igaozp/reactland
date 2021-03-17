import React, {useState} from 'react'
import './App.css'

const Statistics = ({data}) => {
    if (data.all === 0) {
        return (
            <p>No feedback given</p>
        )
    } else {
        return (
            <div>
                <h1>statistics</h1>
                <p>good {data.good}</p>
                <p>neutral {data.neutral}</p>
                <p>bad {data.bad}</p>
                <p>all {data.all}</p>
                <p>average {data.average}</p>
                <p>positive {data.positive}</p>
            </div>
        )
    }
}

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

    const data = {
        good, neutral, bad, all, average, positive
    }

    return (
        <>
            <h1>give feedback</h1>

            <button onClick={goodClick}>good</button>
            <button onClick={neutralClick}>neutral</button>
            <button onClick={badClick}>bad</button>

            <Statistics data={data}/>
        </>
    )
}

export default App
