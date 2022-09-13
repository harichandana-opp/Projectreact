import './App.css';
import Nav from "./Nav.jsx";
import Body from "./Body.js";
import Layout from "./Layout";
import Footer from "./Footer.jsx";
import Aboutus from "./Aboutus";
import Services from './Services';
import Register from './Register';
import Signin from './Signin';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
         <Router>
    <Routes>
      <Route path="/" element={<Nav/>}/>
     <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/services" element={<Services/>}/>
      
      <Route path="/register" element={<Register/>}/>
  <Route path="/signin" element={<Signin/>}/>
  </Routes>

</Router>

    </div>
  );
}

export default App;
