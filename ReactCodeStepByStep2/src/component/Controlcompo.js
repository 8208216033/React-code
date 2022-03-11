import React,{useState} from 'react'

const Controlcompo = () => {
    const[val,setVal]=useState("")
  return (
    <>
    <h1>Control by state</h1>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    <h1>{val}</h1>

    </>
  )
}

export default Controlcompo