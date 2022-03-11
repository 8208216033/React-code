import React,{useRef} from 'react'
//For dom manupulation

const Userefinfunction = () => {
    let inputRef=useRef(null);
    const hadleinput=()=>
    {
       console.warn("function test")
       inputRef.current.value="1000"
       inputRef.current.focus();
       inputRef.current.style.color="red"
    //    inputRef.current.style.display="none"

    }
  return (
    <>
    <h1>Use Ref in react</h1>
    <input type="text" ref={inputRef}/>
    <button onClick={hadleinput}>Handle input</button>
    </>
  )
}

export default Userefinfunction