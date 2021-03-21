import React from 'react'

const Hello = ({name}) => {
    console.log(name)
    const today = () => new Date().getDate()

    return (
        <div>
            <p>Hello {name}, today is {today()}</p>
        </div>
    )
}

export default Hello
