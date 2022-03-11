
import React,{useState}from 'react'

function Basicform() {
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [sub,setSub]=useState("");
    function getformdata(e)
    {
        console.log(name,tnc,sub)
        e.preventDefault() //prevent form submission
    }
  return (
    <div>
        <h2>Handle Form</h2>
        <form onSubmit={getformdata} >
            <span>Enter Your Name:  </span>
            <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
            <br/><br/>
            <span>Select subject:  </span>
            <select onChange={(e)=>setSub(e.target.value)}>
                <option>Select subject</option>
                <option>Java</option>
                <option>Angular</option>
                <option>React</option>
            </select>
            <br/>
            <br/>

            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>Accept term and condition
            <br/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Basicform