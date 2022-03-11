import './style.css'
import React from 'react'
import style from'./custom.module.css'

function Stylesheet() {
  return (
    <div>
        <h1 className='primary'>Hiii!</h1>
        <h2 style={{color:"red", backgroundColor:"blue"}}>Hello </h2>
        {/* <h3 style={style.c}>Good Morning</h3>*/}
        </div> 
  )
}

export default Stylesheet