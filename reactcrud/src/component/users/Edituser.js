import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
const Edituser = () => {
  const {id}=useParams();
 
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
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
           e.preventDefault();
           await axios.put(`http://localhost:3003/users/${id}`,user)
           history("/")
    }

    useEffect(()=>
    {
      loadUser();
    },[])

    const loadUser=async()=>
    {
      const result=await axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data)
    }

  return (
    <>
    <form onSubmit={e=>onSubmit(e)}>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Name</label>
    <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={name} onChange={e=>onInputChange(e)} />
    
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">username</label>
    <input  class="form-control" id="exampleInputPassword1" name='username' value={username} onChange={e=>onInputChange(e)} />
  </div>

  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">email</label>
    <input  class="form-control" id="exampleInputPassword1" name='email'value={email} onChange={e=>onInputChange(e)}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Update user</button>
</form>
    </>
  )
}

export default Edituser