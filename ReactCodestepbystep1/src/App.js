import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState,useEffect} from 'react';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Counter from './Component/Counter';
import EventBinding from './Component/EventBinding';
import Inputbox from './Component/Inputbox';
import Changeinputvalue from './Component/Changeinputvalue';
import Hideandshow from './Component/Hideandshow';
import Basicform from './Component/Basicform';
import Ifcondition from './Component/Ifcondition';
import Ifmodified from './Component/Ifmodified'
import Basicformvalidation from './Component/Basicformvalidation';
import Passfunctionasprops from './Component/Passfunctionasprops';
import Useeffect from './Component/Useeffect';
import Useeffectmodified from './Component/Useeffectmodified';
import Uewithspecifiedpropsandstate from './Component/Uewithspecifiedpropsandstate'
import Stylesheet from './Component/Stylesheet';
import Bootstrap from './Component/Bootstrap';
import Array from './Component/Array';
import Arraywithobject from './Component/Arraywithobject';
import Arraynested from './Component/Arraynested'
import Reausecomponenent from './Component/Reausecomponenent'
import Reusecomchild from './Component/Reusecomchild';
import Reactfragment from './Component/Reactfragment';
import Digitalwatch from './Component/Digitalwatch';

function App() {

 let name="punam";
 const [count,setCount]=useState(0)
 const [data,setData]=useState(10)
  
 function Inccount()
 {
   setCount(count+1);
     console.log("count is"+count)
 }

function Incdata()
 {
     setData(data+1)
     console.log("count is"+data)
 }

 function getData()
 {
   alert("from app component");
 }
  return (
    <div className="App">
     {/* <Greet name={name}/> */}
     {/* {/* <Welcome /> */}
     {/* <Counter/> */}
     {/* <EventBinding/>   */}

    {/* <Inputbox/>   */}
     {/* <Changeinputvalue/> */}
     {/* <Hideandshow/> */}
      {/* <Basicform/> */}
     

      {/* <Ifcondition/> */}
      {/* <Ifmodified/> */}
      {/* <Basicformvalidation/> */}

      {/* <Passfunctionasprops data={getData}/>*/}

      {/* <Useeffect/> */}
      {/* <Useeffectmodified/>   */}


      {/* <Uewithspecifiedpropsandstate data={data} count={count} Inccount={Inccount} Incdata={Incdata}/> */}

     {/* <Stylesheet/> */}
     {/* <Bootstrap/> */}
     {/* <Array/> */}
     {/* <Arraywithobject/> */}
     {/* <Arraynested/> */}
     <Reausecomponenent/>
     {/* <Reusecomchild/> no need to use in app.js*/}
     {/* <Reactfragment/> */}

    {/* <Digitalwatch/> */}

    </div>
  );
}

export default App;
