import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'

const Hello = (props) => {
    console.log(props)
    const today = () => new Date().getDate()

    return (
        <div>
            <p>Hello {props.name}, today is {today()}</p>
        </div>
    )
}

const Course = (props) => {
    console.log(props)
    return (
        <h1>{props.name}</h1>
    )
}

const Content = ({part, exercise}) => {
    console.log(part)
    console.log(exercise)
    return (
        <p>{part} {exercise}</p>
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

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Hello Vite + React!</p>
            <p>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is: {count}
                </button>
            </p>
            <Hello name="world"/>
            <Hello name="React"/>

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
