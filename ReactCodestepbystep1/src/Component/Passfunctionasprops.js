import React from 'react'


function Passfunctionasprops(props) {
  return (
    <div>
        <h3>Passfunctionasprops</h3>
       
        <button onClick={props.data}>call function from parent</button>
    </div>
  )
}

export default Passfunctionasprops