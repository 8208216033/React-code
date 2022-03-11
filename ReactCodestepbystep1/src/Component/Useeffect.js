import React ,{useEffect,useState}from 'react'

function Useeffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>
    {
        alert("hii")
    })
    
   function increment()
    {
        setCount(count+1)
    }
  return (
    <div>
    <h1>Useeffect {count}</h1>
    <button onClick={()=>increment()}>Increment conunt</button>
    </div>
  )
}

export default Useeffect