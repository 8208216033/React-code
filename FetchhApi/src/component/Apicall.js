


import React, { useState,useEffect } from 'react'

const Apicall = () => {
  const[user,setUser]=useState([]);


  // const getUser=async()=>
  // {
  //   const response= await fetch('https:/api.github.com/users');
  //   console.warn("hii")
  // }

  const fetchData=()=>
  {
    fetch("https://jsonplaceholder.typicode.com/todos").then((response)=>
    {
      return response.json();
    }).then((data)=>
    {
      console.log(data)
    })
  }
  useEffect(()=>
    {
    // alert("hii");
    // getUser();
    fetchData();

    },[])
 
  return (
  
        <>
        <h1>List of users</h1>
        <button type="button" class="btn btn-primary">Primary</button>
        <div className="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
       
        </>
    
  )
}

export default Apicall