import './Layout.css';
import part from './images/partalert.png';

function Nav() {
  return (
    
      <div className="container">
        <div className="box">
          <img src={part} alt=""/>
          <h2>Part Search</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla<br></br> id iaculis sapien. Integer vel elit in risus pharetra 
                cursus.
                </p>
                <a href="#" >Part Search</a>
        </div>
        <div className="box">
        <img src={part} alt=""/>
        <h2>Parametric Search</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla<br></br> id iaculis sapien. Integer vel elit in risus pharetra 
                cursus.
                </p>
                <a href="#" >Parametric Search</a>
        </div>
        <div className="box">
        <img src={part} alt=""/>
        <h2>Part Intelligence</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla<br></br> id iaculis sapien. Integer vel elit in risus pharetra 
                cursus.
                </p>
                <a href="#" >Part Intelligence</a>
        </div>
        </div>

   
  
  );
}

export default Nav;
