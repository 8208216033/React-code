import React from 'react'
import Reusecomchild from './Reusecomchild'

const Reausecomponenent = () => {

    const users=[
        {name:"a",email:"a@gamil.com",contact:"111"},
        {name:"b",email:"b@gamil.com",contact:"114"},
        {name:"c",email:"c@gamil.com",contact:"115"}
    ]
  return (
      <>
      <div>Reausecomponenent</div>
      {
          users.map((i)=>
          <Reusecomchild array={i}/>
          
         
          )
      }
      
      </>
    
  )
}

export default Reausecomponenent