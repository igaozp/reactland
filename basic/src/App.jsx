import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

const Hello = (props) => {
    console.log(props)
    return (
        <div>
            <p>Hello {props.name}, today is {props.time}</p>
        </div>
    )
}

const Course = (props) => {
    console.log(props)
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    console.log(props)
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
    )
}

const Header = () => {
    const [count, setCount] = useState(0)

    const now = '2021-03-14'
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
            <Content part={parts[0].name} exercise={parts[0].exercise}/>
            <Content part={parts[1].name} exercise={parts[1].exercise}/>
            <Content part={parts[2].name} exercise={parts[2].exercise}/>
            <Total parts={parts}/>
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
