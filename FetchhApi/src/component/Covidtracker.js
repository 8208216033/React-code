import React, { useEffect } from 'react'

const Covidtracker = () => {
    const getCovidData=async()=>
    {
        // try{
        //     const res= await  fetch('https://jsonplaceholder.typicode.com/comments')
        //     console.log(res)
        // }catch(err){
        //     console.log(err);
        // }
        // console.log("hii")
        alert("hii")
    
    };
    useEffect(()=>
    {
      
        getCovidData();
    },[]);
  return (
    <div>Covidtracker</div>
  )
}

export default Covidtracker