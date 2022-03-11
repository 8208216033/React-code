import Datatranfromchildtopare from './component/Datatranfromchildtopare';
import React from 'react'
import Ref from './component/Ref';
import Userefinfunction from './component/Userefinfunction';
import Forwordref from './component/Forwordref'
import Controlcompo from './component/Controlcompo';
import Uncontrolcomp from './component/Uncontrolcomp'
// import Rouuter from './component/Rouuter';

const App = () => {
  const data=(name)=>
  {
    alert("from parent" +name)
  }

  const add=(a,b)=>
  {
    alert(a+b)
  }
  return (
    <>
    {/* <Datatranfromchildtopare parent={data} addition={add}/> */}
    {/* <Ref/> */}
  {/* <Userefinfunction/> */}
     {/* <Forwordref/> */}
     {/* <Controlcompo/> */}
     <Uncontrolcomp/>
     {/* <Rouuter/> */}
    </>
  )
}

export default App