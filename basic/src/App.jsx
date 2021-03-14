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

const Display = (props) => {
    return (
        <div>{props.count}</div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
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

    const add = () => setCount(count + 1)
    const clear = () => setCount(0)
    const reduce = () => setCount(count - 1)

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>Hello Vite + React!</p>
            <p>
                <Display count={count}/>
                <Button handleClick={add} text='add'/>
                <Button handleClick={clear} text='clear'/>
                <Button handleClick={reduce} text='reduce'/>
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
