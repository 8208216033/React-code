import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.css" 
import { useSelector,useDispatch } from 'react-redux';
import {incNumber,decNumber} from './actions/index';
import cartlogo from './component/cartlogo.jpg'
import './App.css'


const App = () => {
  const myState=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch();
  return (
    <>
    <h1>Hello</h1>
    <div>
      {/* <a className='quantity_minus' title='Decrement'><span>-</span></a> */}
      <img src={cartlogo} className="img"/>{myState}
      <br/>
     <button type="button" className="btn btn-outline-primary" onClick={()=>{dispatch(decNumber())}}>-</button>
      
      <input name='qauntity' type='text' className='quantity_input' value={myState}/>
      {/* <a className='quantity_plus' title='increment'><span>+</span></a> */}
      <button type="button" className="btn btn-outline-primary" onClick={()=>{dispatch(incNumber())}}>+</button>
      </div>
    </>
  )
}

export default App