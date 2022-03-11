import React,{useRef} from 'react'


const Uncontrolcomp = () => {
    const inputRef=useRef("")
    const inputRef2=useRef("")
   const submitform=(e)=>
   {
       e.preventDefault();
       console.log("input field 1 value"+inputRef.current.value)
       console.log("input field 2 value"+inputRef2.current.value)
       let b=document.getElementById('fff').value
       console.log('input box 3 value'+ b)
   }
  return (
    <>
    <h1>Uncontrolcomp</h1>
    <form onSubmit={submitform}>
    <input ref={inputRef} type="text"/><br/>
    <input ref={inputRef2} type="text"/><br/>
    <input id="fff" type="text"/><br/>
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}

export default Uncontrolcomp