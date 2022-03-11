import React,{useState} from 'react'
import Welcome from './Welcome'

//two condition if else
// function Ifmodified() {
//     const [login,setLogin]=useState(false)
//   return (
     
//     <div> {
//         login?<h2>WelcomeGuest</h2>: <h2>Welcome Poonam</h2>
//     }
//     </div>
//   )
// }

//if three condition
function Ifmodified() {
    // const [login,setLogin]=useState(3)// use this beacuse we cant update variables
    const login=2
  return (
     
    <div> {
        login==1?<h2>WelcomeGuest</h2>:login==2? <h2>Welcome Poonam</h2>:<h3>No user</h3>
    }
    </div>
  )
}


export default Ifmodified