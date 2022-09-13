import React from "react";
import lap from './images/semi1.jpg';
import "./Sign.css";
function Signin() {
    return (
     <div className="sign">
         <div className="image">
            <img src={lap} alt=""/>
        </div>
        <div className="full-page">
            <div id="login-page">
                <div className="form-box">
               <form id ='register' className="inputy">
                
                <input type='email' className="in-field" placeholder="Email Id" required/><br/><br/>
                <input type='password' className="in-field" placeholder="Enter Password" required/><br/><br/>
                <button type ='submit' class='sub-btn'>Sign In</button>
                
               </form>
                </div>
            </div>
        </div>

    </div>
     
    );
  }
  
  export default Signin;
  