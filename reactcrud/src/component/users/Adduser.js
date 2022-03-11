import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Adduser = () => {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })

    const [err,setErr]=useState(false)
    const history=useNavigate();

    // const [name,setName]=useState("")
    // const [username,setUsername]=useState("")
    // const [email,setEmail]=useState("")

    const{name,username,email}=user;
    const onInputChange=e=>
    {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const  onSubmit=async (e)=>
    {
           
           console.log(user.name)
           e.preventDefault(); 
          
           if(user.name!==""&&user.username!==""&&user.email!==""){
            e.preventDefault(); 
            await axios.post("http://localhost:3003/users",user)
           history("/")}
           else{
             setErr(true)
           }
           
    }

  return (
    <>
    <form onSubmit={e=>onSubmit(e)}>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
    <input  class="form-control"autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={name} onChange={e=>onInputChange(e)} />
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">username</label>
    <input  class="form-control" autoComplete='off' id="exampleInputPassword1" name='username' value={username} onChange={e=>onInputChange(e)} />
  </div>

  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">email</label>
    <input  class="form-control" autoComplete='off' id="exampleInputPassword1" name='email'value={email} onChange={e=>onInputChange(e)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default Adduser