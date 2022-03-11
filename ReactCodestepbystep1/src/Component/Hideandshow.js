import React,  { useState } from "react"


function Hideandshow() {
    let [data,setdata]=useState(false);

  return (
    <div>
      {
          data?<h2>Welcome to react</h2>
          :null
      }
        {/* <button onClick={()=>setdata(false)}>Hide</button>
        <button onClick={()=>setdata(true)}>Show</button>
 */}
         <button onClick={()=>setdata(!data)}>Toggle</button>

    
    </div>
    
  )
}

export default Hideandshow