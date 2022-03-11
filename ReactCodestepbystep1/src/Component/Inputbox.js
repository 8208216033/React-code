import React,{useState} from 'react'

function Inputbox() {
    const [Data ,setData]=useState(null)
  function  getData(val)
    {
     console.log(val.target.value);
     setData(val.target.value)
    }

  return (
    <div>
        <h1>Get Input Box Value</h1>
        <h4>{Data}</h4>
        
        <input type="text" onChange={getData}></input>
        {/* <button onClick={}></button> */}
    </div>
  )
}

export default Inputbox