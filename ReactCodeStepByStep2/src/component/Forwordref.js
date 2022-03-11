//if input box and button in different component

import React,{useRef} from 'react'
import Forwordrefchild from './Forwordrefchild'

const Forwordref = () => {
    const inputRef=useRef(null);
    const updateInput=()=>{
        // inputRef.current.value="100"
        inputRef.current.style.color="red"

    }
  return (
      <>
       <div>Forwordref</div>
       <Forwordrefchild ref={inputRef}/>
       <button onClick={updateInput}>update input box</button>
      </>
   
  )
}

export default Forwordref