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

function App() {
    const [count, setCount] = useState(0)

    const now = '2021-03-14'
    return (
        <>
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
                <p>
                    Edit <code>App.jsx</code> and save to test HMR updates.
                </p>
                <p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    {' | '}
                    <a
                        className="App-link"
                        href="https://vitejs.dev/guide/features.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vite Docs
                    </a>
                </p>
            </header>
        </>
    )
}

export default App
