import React from 'react'

const Reusecomchild = (props) => {
  return (
    <div>
        <span>{props.array.name}</span>
        <span>{props.array.email}</span>
        <span>{props.array.contact}</span>
    </div>
  )
}

export default Reusecomchild