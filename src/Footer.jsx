import './Footer.css';
import logo from './images/logo.png';
const curryear = new Date().getFullYear();
function Footer() {
  return (
    <div className="Footer">
    <div className="foot">
    <img src={logo} alt=""/>
    <h3>hackAR COVE</h3>
   </div>
<div className="footer">
      <p>Copyright @ {curryear}</p>
      </div>
  </div>
  );
}

export default Footer;
