import React, {useState} from 'react'

const Numbers = ({persons}) => {
    return (
        persons.map(person => <p key={person.name}>{person.name}</p>)
    )
}

function App() {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addClick = () => {
        setPersons(persons.concat({name: newName}))
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNameSumbit = (event) => {
        event.preventDefault()
    }

    return (
        <div className="App">
            <h2>Phonebook</h2>
            <form onSubmit={handleNameSumbit}>
                <div>name: <input value={newName} onChange={handleNameChange}/></div>
                <div>
                    <button type="submit" onClick={() => addClick()}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <Numbers persons={persons}/>
        </div>
    )
}

export default App
