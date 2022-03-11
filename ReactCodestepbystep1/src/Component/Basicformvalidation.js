
import React,{useState}from 'react'

function Basicformvalidation() {
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [err,setErr]=useState(false)
    const [err1,setErr1]=useState(false)
   function loginHandle(e)
    {
        if(user.length<3||password.length<3)
        {
            alert("type correct value")
        }
        else{
            alert("welcome")
        }
      e.preventDefault() 
    }
    function userhandler(e)  //for collecting data
    {     
        let item=e.target.value.length;
        if(item<3)
        {
            //alert("invalid")
            console.log("invalid")
            setErr(true)
        }

        else{
            setErr(false)
        }
        console.log(e.target.value)
        setUser(e.target.value)
    }

    function passwordhandler(e)  //for collecting data
    {     
        let item=e.target.value.length;
        if(item<3)
        {
            //alert("invalid")
            console.log("invalid")
            setErr1(true)
        }

        else{
            setErr1(false)
        }
        console.log(e.target.value)
        setPassword(e.target.value)
    }
  return (
     
    <div>
        <h2>Basicformvalidation</h2>
        <form onSubmit={loginHandle}>
        <span>Enter your name</span>
        <input type="text" autoComplete='true' onChange={userhandler}/><br/>{err?<span>User not valid</span>:""}
        <br/>
        <span> Enter your password</span>
        <input type="password" autoComplete='true' onChange={passwordhandler}/>{err1?<span>Password not valid</span>:""}
        <br/>
        <button type="submit">Login</button>
        </form>
        
    
    </div>
  )
}

export default Basicformvalidation