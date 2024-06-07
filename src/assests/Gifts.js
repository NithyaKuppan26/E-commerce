import g1 from '../images/1.jpg'
import g2 from '../images/2.jpg'
import g3 from '../images/3.jpg'
import g4 from '../images/4.jpg'
import g5 from '../images/5.jpg'
import g6 from '../images/6.jpg'
import g7 from '../images/7.jpg'
import g8 from '../images/8.jpg'
import g9 from '../images/9.jpg'
import g10 from '../images/10.jpg'
import g11 from '../images/11.jpg'
import g12 from '../images/12.jpg'
import g13 from '../images/13.jpg'
import g14 from '../images/14.jpg'
import g15 from '../images/15.jpg'
import g16 from '../images/16.jpg'
import { Link } from 'react-router-dom' 
import './Gifts.css'
function Gifts() {
  return (
    <div >
      <div className='gifts'>
      
      <div className='gMainDiv1'>
      <p>Gift loved ones</p>
      <div className='giftsDiv'>
      <div class="card" style={{width: "18rem;"}} className='cardDiv' >
    <img src={g1} class="card-img-top" alt="..."/>
    <p class="card-text">B/w - Color</p>
  </div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g2} class="card-img-top" alt="..."/>
    <p class="card-text">Key Chain</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g3} class="card-img-top" alt="..."/>
    <p class="card-text">Wood Carving</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g4} class="card-img-top" alt="..."/>
    <p class="card-text">Clock Print</p>
</div>
<Link to={"/products"}><p>Explore More</p></Link>
    </div>
      </div>
      <div className='gMainDiv2'>
      <p>Gift loved ones</p>
      <div className='giftsDiv'>
      <div class="card" style={{width: "18rem;"}} className='cardDiv' >
    <img src={g5} class="card-img-top" alt="..."/>
    <p class="card-text">Calendar Print</p>
  </div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g6} class="card-img-top" alt="..."/>
    <p class="card-text">Clock Print</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g7} class="card-img-top" alt="..."/>
    <p class="card-text">T-shirt Print</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g8} class="card-img-top" alt="..."/>
    <p class="card-text">Magic Mug</p>
</div>
<Link to={"/products"}><p>See More</p></Link>
    </div>
      </div>
      <div className='gMainDiv3'>
      <p>Upto 30% off</p>
      <div className='giftsDiv'>
      <div class="card" style={{width: "18rem;"}} className='cardDiv' >
    <img src={g9} class="card-img-top" alt="..."/>
    <p class="card-text">Mini Album</p>
  </div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g10} class="card-img-top" alt="..."/>
    <p class="card-text">Photo Frame</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g11} class="card-img-top" alt="..."/>
    <p class="card-text">Mobile Case</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g12} class="card-img-top" alt="..."/>
    <p class="card-text">Pillow Print</p>
</div>
<Link to={"/products"}><p>Shop Now</p></Link>
    </div>
      </div>
      <div className='gMainDiv4'>
      <p>Starting Rs.200</p>
      <div className='giftsDiv'>
      <div class="card" style={{width: "18rem;"}} className='cardDiv' >
    <img src={g13} class="card-img-top" alt="..."/>
    <p class="card-text">Photo Frames</p>
  </div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g14} class="card-img-top" alt="..."/>
    <p class="card-text">Photo Frames</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g15} class="card-img-top" alt="..."/>
    <p class="card-text">Photo Frames</p>
</div>
<div class="card" style={{width: "18rem;"}} className='cardDiv' >
  <img src={g16} class="card-img-top" alt="..."/>
    <p class="card-text">Photo Frames</p>
</div>
<Link to={"/products"}><p>Explore All</p></Link>
    </div>
      </div>
   
      </div>
      </div>
  );
}

export default Gifts;