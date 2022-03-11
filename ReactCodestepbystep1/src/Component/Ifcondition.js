import React,{useState} from 'react'

function Ifcondition() {
    const[profile,SetProfile]=useState(true)
    if(profile)
    {
        return (
            <div><h2>hello guest</h2>
            
               
             </div>
            
          )
    }
    else{
        return(
            <div>
                <h2>Hello Punam</h2>
            </div>
        )
    }
  
}

export default Ifcondition