import React, {useState} from 'react'
import './App.css'

function App() {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
    const [mostVotes, setMostVotes] = useState(0)

    const nextAnecdotes = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const voteClick = () => {
        let votesCopy = Array(...votes)
        votesCopy[selected] += 1
        setVotes(votesCopy)
        setMostVotes(votesCopy.indexOf(Math.max(...votesCopy)))
    }
    return (
        <>
            <h1>Anecdote of the day</h1>
            <div>
                {anecdotes[selected]}
            </div>
            <div>has {votes[selected]} vote</div>
            <button onClick={() => voteClick()}>vote</button>
            <button onClick={() => nextAnecdotes()}>next anecdotes</button>

            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[mostVotes]}</div>
        </>
    )
}

export default App
