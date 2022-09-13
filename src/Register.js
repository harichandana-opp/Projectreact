import React from "react";
import lap from './images/semi1.jpg';
import "./Register.css";
import Nav from "./Nav1.js";
function Register() {
    return (
     <div className="Register">
        <div className="reg">
        <div className="image">
            <img src={lap} alt=""/>
        </div>
        </div>

        <div className="full-page">
            <div id="login-page">
                <div className="form-box">
               <form id ='register' className="input">
                <input type='text'name="firstname" className="in-field" placeholder="First Name" required/><br/><br/>
                <input type='text' name="lastname" className="in-field" placeholder="Last Name" required/><br/><br/>
                <input type='email' name="emailid" className="in-field" placeholder="Email Id" required/><br/><br/>
                <input type='password' name="password" className="in-field" placeholder="Enter Password" required/><br/><br/>
                <input type='password' name="confirmpass" className="in-field" placeholder="Confirm Password" required/><br/><br/>
                <input type="checkbox" classsName="check-box" />I agree to the terms and conditions<br/><br/>
                <button type ='submit' class='sub-btn'>Register</button>
                
               </form>
                </div>
            </div>
        </div>

    </div>
     
    );
  }
  
  export default Register;
  