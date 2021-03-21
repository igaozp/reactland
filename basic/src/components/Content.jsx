import React from 'react'

const Content = ({parts}) => parts.map(part => <p>{part.name} {part.exercise}</p>)

export default Content
