import React from 'react'
import { BrowserRouter as Router,Link,Route } from 'react-router-dom'
//to install react router(npm i react-router-dom)
const Rouuter = () => {
  return (
    <>
    <Router>
        <Link to="/home">Homepage</Link>
        <Link to="/about">About</Link>
        <Route path="home"></Route>
        <Route path="about"><About/></Route>
      
    </Router>
    </>
  )
}



const Home = () => {
  return (
    <div>Home</div>
  )
}

const About = () => {
    return (
      <div>About</div>
    )
  }

export default Rouuter
