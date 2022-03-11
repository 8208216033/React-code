import React, { useState } from 'react'

const Digitalwatch = () => {
    let time=new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const updatetime=()=>
    {
        let time=new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(updatetime,1000)
  return (
    <>
    <h1>Digital watch</h1>
    <h1>{ctime}</h1>
    {/* <button onClick={updatetime}>Get Time</button> */}
    </>
  )
}

export default Digitalwatch