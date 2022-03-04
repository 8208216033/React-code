import React from 'react'
import { useNavigate} from 'react-router-dom'
import './cake.css'
import cake from './cake.jfif'

const Cakelist = () => {


  const array=[
    {id:1,name:"vanilla cake",weight:'500gm',price:"400 rs"},
    {id:2,name:"Mango Cake",weight:'500gm',price:"800 rs"},
    {id:3,name:"blueberry Cake",weight:'500gm',price:"800 rs"}


  ]
  let history=useNavigate();
 
  return (
    <>
 


{array.map((i,index)=>
<div className="card" >
  <img src={cake} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{i.name}</h5>
    <p className="card-text">Cake Price: {i.weight}</p>
    <p className="card-text">Cake Weight: {i.price}</p>
    

<button type="button" className="btn btn-primary" onClick={()=>history("/cakedis/"+i.id)}>Detail discription</button>


  </div>
</div>
)}



    </>
  )
}

export default Cakelist