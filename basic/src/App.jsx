import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import Course from "./components/Course";
import Content from "./components/Content";
import History from "./components/History";
import Hello from "./components/Hello";
import Display from "./components/Display";
import Total from "./components/Total";
import Button from "./components/Button";

const Header = () => {
    const [count, setCount] = useState(0)

    console.log("rendering...", count)
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercise: 10
        },
        {
            name: 'Using props to pass data',
            exercise: 7
        },
        {
            name: 'State of a component',
            exercise: 14
        }
    ]

    const add = () => setCount(count + 1)
    const clear = () => setCount(0)
    const reduce = () => setCount(count - 1)

    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        const newClicks = {
            ...clicks,
            left: clicks.left + 1
        }
        setAll(allClicks.concat('L'))
        setClicks(newClicks)
    }
    const handleRightClick = () => {
        const newClicks = {
            ...clicks,
            right: clicks.right + 1
        }
        setAll(allClicks.concat('R'))
        setClicks(newClicks)
    }

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Hello Vite + React!</p>
            <div>
                <Display count={count}/>
                <Button handleClick={add} text='add'/>
                <Button handleClick={clear} text='clear'/>
                <Button handleClick={reduce} text='reduce'/>
            </div>
            <Hello name="world"/>
            <Hello name="React"/>

            <Course name={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>

            <div>
                {clicks.left}
                <Button handleClick={handleLeftClick} text='left'/>
                <Button handleClick={handleRightClick} text='right'/>
                {clicks.right}
                <p>{allClicks.join(' ')}</p>
                <History allClicks={allClicks}/>
            </div>
        </header>
    )
}

function App() {

    return (
        <>
            <Header/>
        </>
    )
}

export default App
