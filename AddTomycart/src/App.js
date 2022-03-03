import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './componenent/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Addtocart from './componenent/Addtocart'
import About from './componenent/About'


function App() {
  const [cart,setCart]=useState(0)
  const addtocart=()=>
  {
      setCart(cart+1)
  }
  let val=cart;
  return (
    
      <Router>
      <div className="App">
        <Navbar cartval={val}/>
       
      <Routes>
      <Route exact path="/addtocart" element={< Addtocart add={addtocart} cartval={val} />}/>
      {/* <Route exact path="/addtocart" element={< Addtocart add={ ()=>{setCart(cart+1)} }/>}/> */}
      <Route exact path="/about" element={< About/>}/>
      </Routes>
      </div>
      </Router>  
    
      
    
  );
}

export default App;
