import React, { useState } from 'react'

const Postt = () => {

    const [title,setTitle]=useState("")
    const [completed,setComleted]=useState("")

    const saveUser=()=>
    {
        console.warn(title,completed);
        let data={title,completed}
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                "Content-Type":'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>
        {
            // console.warn(res)
            res.json().then((resp)=>
            {
                console.warn(resp)
            })
        })
       
    }
  return (
  <>
  <div>Postt</div>
  <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}name='title'/><br/><br/>
  <input type="text" value={completed} onChange={(e)=>{setComleted(e.target.value)}}name='comleted'/><br/><br/>
  <button type='button'onClick={saveUser}>Save</button>
  
  </>
    
  )
}

export default Postt