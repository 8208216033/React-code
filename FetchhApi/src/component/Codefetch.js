import React, { useEffect, useState } from 'react'

const Codefetch = () => {

    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>
    {
        result.json().then((resp)=>
        {
            // console.warn(resp)
            setData(resp)
        })
    })

    },[])

    console.warn(data);
  return (
    <><div>Codefetch</div>
    <table border="1">
        <tr>
            <td>Title</td>
            <td>Completed</td>
        </tr>
        {
            data.map((item)=>
            <tr>
                 <td>{item.title}</td>
            <td>{item.id}</td> 
            </tr>
            ) 
                    
        }
    </table>
    </>
  )
}

export default Codefetch