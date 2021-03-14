import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, today is {props.time}</p>
        </div>
    )
}

const Course = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Header = () => {
    const [count, setCount] = useState(0)

    const now = '2021-03-14'
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercise1 = 10
    const part2 = 'Using props to pass data'
    const exercise2 = 7
    const part3 = 'State of a component'
    const exercise3 = 14

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Hello Vite + React!</p>
            <p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is: {count}
                </button>
            </p>
            <Hello name="world" time={'2021-03-14'}/>
            <Hello name="React" time={now}/>

            <Course name={course}/>
            <Content part={part1} exercise={exercise1}/>
            <Content part={part2} exercise={exercise2}/>
            <Content part={part3} exercise={exercise3}/>
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
