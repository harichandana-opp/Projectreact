import lap from './images/lastlap2.jpg';
import './Body.css';
function Body() {
  return (
    <div className="body">
      <div className="body1">
        <img src={lap} alt=""/>
    <div className="body2">
        <div className='body3'>
      <h1>Let's Electrify The World!!</h1>
        <p>Electrical accessories are items which are used in domestic and industrial wiring. <br></br>
            It is practically impossible to imagine our life without them. Imagine a life without a switch.<br></br> 
            How are we supposed to turn on lights, fans, etc? Daunting isn't it! Well worry not <br></br>electrical items are 
            manufactured to make our life easy and save time.

</p>
</div>
      </div>
      <div className="explore">
      <a href="#">Explore Now → </a>
      </div>
      <div className="search">
      <input type="text" placeholder='Enter part number/part name' name='har' className='expand'></input>
      <input type="submit" value="Search"></input>
      </div>
    </div>
    </div>
  );
}

export default Body;
