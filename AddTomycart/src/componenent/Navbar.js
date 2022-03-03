import React from 'react'
import { Link,NavLink} from 'react-router-dom'
import cart from './cartlogo.jpg'
import './nav.css'
import About from './About'

const Navbar = (props) => {
    
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">ADD TO CART</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink to="/addtocart">Addtocart</NavLink>
      </li>
      <li className="nav-item m3">
        <NavLink to="/about">About Us</NavLink>
        
      </li>
      
      
    </ul>
    <img src={cart} className="cart"/>{props.cartval}
    
  </div>
</nav>
</>
  )
}

export default Navbar