import React, { useState,useEffect } from 'react'
//for perticular function
function Useeffectmodified() {
    const [count,setcount]=useState(0)
    const [counts,setcounts]=useState(0)

    useEffect(()=>
    {
        alert("useEffect call")
    },[counts])
  return (
    <div><h1>Useeffectmodified {count}</h1>
    <button onClick={()=>setcount(count+1)}>Click 1</button>

    <h1>Useeffectmodified one call {counts}</h1>
    <button onClick={()=>setcounts(counts+1)}>Click 1</button>
    </div>

    
  )
}

export default Useeffectmodified