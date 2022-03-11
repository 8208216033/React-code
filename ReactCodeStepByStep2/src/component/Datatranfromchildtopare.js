import React from 'react'

const Datatranfromchildtopare = (props) => {
  const name="welcome";
  const a=3;
  const b=5;
  return (
      
    <>
    <button onClick={()=>props.parent(name)}>Hiii</button>

    <button onClick={()=>props.addition(a,b)}>Addition</button>
    </>
  )
}

export default Datatranfromchildtopare