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
                <table>
                    <Statistic text='good' value={data.good}/>
                    <Statistic text='neutral' value={data.neutral}/>
                    <Statistic text='bad' value={data.bad}/>
                    <Statistic text='all' value={data.all}/>
                    <Statistic text='average' value={data.average}/>
                    <Statistic text='positive' value={data.positive}/>
                </table>
            </div>
        )
    }
}

const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
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

            <Button text='good' handleClick={() => goodClick()}/>
            <Button text='neutral' handleClick={() => neutralClick()}/>
            <Button text='bad' handleClick={() => badClick()}/>

            <h1>statistics</h1>
            <Statistics data={data}/>
        </>
    )
}

export default App
