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

const Header = () => {
    const [count, setCount] = useState(0)
    const now = '2021-03-14'

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
