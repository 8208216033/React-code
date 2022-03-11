import React, { useState } from 'react'

const Changeinputvalue = () => {
    const [data,setData]=useState(null);
    const [print,setPrint]=useState(false);
    function  getData(val)
    {
     console.log(val.target.value);
     setData(val.target.value)
     setPrint(false)
    }

  return (
    <div><h1>Get Input Box Value</h1>
    {  print?
        <h4>{data}</h4>
        :null
    }
    
    
    <input type="text" onChange={getData}></input>
    

    <button onClick={()=>setPrint(true)}>print input</button>
    
    </div>
  )
}

export default Changeinputvalue