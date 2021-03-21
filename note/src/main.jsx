import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2021-03-21',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only JavaScript',
        date: '2021-03-21',
        important: false
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTTP protocol',
        date: '2021-03-21',
        important: true
    }
]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
)
