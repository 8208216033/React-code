import React from 'react'

const Arraywithobject = () => {
    const users=[
        {name:"a",email:"a@gamil.com",contact:"111"},
        {name:"b",email:"b@gamil.com",contact:"114"},
        {name:"c",email:"c@gamil.com",contact:"115"}
    ]
      
  return (
    <div>
        <h1>Arraywithobject</h1>
        <table style={{border:1}}>
            <thead>
       
                    <tr>
                    <td>Index</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>contact</td>
                    </tr>
                    </thead>  
                    <tbody>
        {
            users.map((item,i)=>
            item.contact==='111'?
                <tr key={i}>
                    <td>{i}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr>:
                null
          )
        }
        </tbody>
        </table>
        </div>
  )
}

export default Arraywithobject