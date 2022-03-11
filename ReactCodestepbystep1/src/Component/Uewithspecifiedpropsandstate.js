import React, { useState,useEffect } from 'react'

function Uewithspecifiedpropsandstate(props) {
    useEffect(()=>
    {
        alert(props.count)

    },
    [props.count])
  
  return (
    <div>
        <h1>Count {props.count}</h1>
        <button onClick={()=>props.Inccount()}>Count Increment</button>
        <h1>data {props.data}</h1>
        <button onClick={()=>props.Incdata()}>Data Increment</button>
        </div>
  )
}

export default Uewithspecifiedpropsandstate