import React from 'react'
import{useParams} from 'react-router-dom'
import cake from './cake.jfif'
import './cake.css'

const Vanillacake = (prop) => {
  const {id}=useParams();
  let idd=id
  console.log(idd)
  console.log(prop)
  return (
    <>
   {/* <h1>Cake{id}</h1>
   <h1>Cake{idd}</h1> */}
   {
    idd==1?<div>
      <img src={cake} className="card-img-top" id="img"/>
      <p>Discription: This is vanilla flavour </p>
     </div>
    
    :idd==2? <div><img src={cake} className="card-img-top" id="img"/>
    <p>Discription: This is Mango flavour </p>
   </div>:<div><img src={cake} className="card-img-top" id="img"/>
    <p>Discription: This is blueberry flavour </p>
   </div>
    
   }
  
    </>
  )
}

export default Vanillacake