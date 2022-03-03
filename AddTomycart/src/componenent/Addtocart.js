import React, { useState } from 'react'
import Navbar from './Navbar'
import {useNavigate } from'react-router-dom'

const Addtocart = (props) => {

  
  console.log(props.cart)
  return (
    <>
      
    <h1>{props.cartval}</h1>
    
    <button onClick={props.add}>Add</button>
  
    </>
  )
}

export default Addtocart