import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Cakelist from './component/Cakelist';
import{BrowserRouter as Router,Route,Routes, useNavigate} from 'react-router-dom'
import Vanillacake from './component/Vanillacake';
import { useState } from 'react';

function App() {
  


  return (
   
    <Router>
      <div>
      <h1>Welcome</h1>
     
    <Routes>
    <Route exact path="/" element={< Cakelist/>}/>
   
    <Route exact path="/cakedis/:id" element={< Vanillacake/>}/>
    </Routes>
    </div>
    </Router>
    
  
  );
}

export default App;
