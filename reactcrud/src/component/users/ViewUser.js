import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'


const ViewUser = () => {
    const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const loadUser=async()=>
    {
      const result=await axios.get(`http://localhost:3003/users/${id}`)
      setUser(result.data)
    }

    useEffect(()=>
    {
      loadUser();
    },[])
  return (
    <>
    <div className='container'>
        <Link className='btn btn-primary' to="/">Back</Link>
        <h1 className='display-4'>User Id:{id}</h1>
        <hr/>
        <ul className='list-group w-50'>
           <li className='list-group-item'>name:{user.name}</li> 
           <li className='list-group-item'>User name:{user.username}</li> 
           <li className='list-group-item'>email:{user.email}</li> 
            </ul>
        </div>
    </>
  )
}

export default ViewUser