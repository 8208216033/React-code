import React from 'react'

const Arraynested = () => {
    const users=[
        {name:"a",email:"a@gamil.com",address:[
            { Hn:'10',city:'noida',country:'India' },
            { Hn:'11',city:'mumbai',country:'India' },
            { Hn:'15',city:'pune',country:'India' }
       ]
      },
        {name:"b",email:"b@gamil.com",address:[
            { Hn:'10',city:'noida',country:'India' },
            { Hn:'11',city:'mumbai',country:'India' },
            { Hn:'15',city:'pune',country:'India' }]
        },
        {name:"c",email:"c@gamil.com",address:[
            { Hn:'10',city:'noida',country:'India' },
            { Hn:'11',city:'mumbai',country:'India' },
            { Hn:'15',city:'pune',country:'India' }]
        }
    ]
      
  return (
       <>
        <div>Arraynested</div>
        <table>
            <tbody>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                </tr>
                
            </tbody>
            <table>
                <tbody>
            {
                  users.map((item)=>
                  <tr>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.address.map((data)=>
                     <tr>
                         <td>{data.Hn}</td>
                         <td>{data.city}</td>
                         <td>{data.country}</td>
                     </tr>
                      )}</td>
                      
                      </tr>)
                   
            }   </tbody>
          </table>
        </table>
       </>
   
  )
}

export default Arraynested