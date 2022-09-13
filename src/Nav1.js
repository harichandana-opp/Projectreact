import React, { Component } from 'react';
import  ReactDOM  from 'react-dom';
import logo from './images/logo.png';
import './Nav.css';

import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
    <nav class="navbar">
    
     <div class="logo"> 
     <img src={logo} alt=""/>
     <h5>HACKar cove</h5>
      </div>
    
     <ul class="nav-links">
       
      
       
       <div class="menu">
         {/*<li><Link to="/">Home></Link></li>
         <li><a href="/">About</a></li>
         <li class="services">
           <a href="/">Services</a>
           
           <ul class="dropdown">
             <li><a href="/">Dropdown 1 </a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 2</a></li>
             <li><a href="/">Dropdown 3</a></li>
             <li><a href="/">Dropdown 4</a></li>
           </ul>
         </li>
         <li><a href="/">Register</a></li>
  <li><a href="/">Sign In</a></li>*/}
  <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li class="services">
           <a href="/">Services</a>
           
           <ul class="dropdown">
             <li><Link to="/">Dropdown 1 </Link></li>
             <li><Link to="/">Dropdown 2</Link></li>
             <li><Link to="/">Dropdown 3</Link></li>
             <li><Link to="/">Dropdown 4</Link></li>
             <li><Link to="/">Dropdown 5</Link></li>
           </ul>
         </li>
           
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/signin">Sign In</Link></li>
       </div>
     </ul>
   </nav>
   
    </div>
  );
}

export default Nav;
