import React from 'react'
import './Navbar.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
  } from 'react-router-dom';
const Navbar = () => {
  return (
   <>
   <div className='navbar'>
    <ul>
    <li><NavLink to="/" className="navlink">Home</NavLink></li>
    <li><NavLink to="/about" className="navlink">About</NavLink></li>
          <li><NavLink to="/contact" className="navlink">Contact</NavLink></li>
          <li><NavLink to="/profile" className="navlink">Profile</NavLink></li>
          <li><NavLink to="/services" className="navlink">Services</NavLink></li>
    </ul>
   </div>
   </>
  )
}

export default Navbar