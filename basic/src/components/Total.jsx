import React from 'react'

const Total = ({parts}) => {
    console.log(parts)
    return (
        <p>Number of exercises {parts.map(part => part.exercise).reduce((first, second) => first + second)}</p>
    )
}

export default Total
