import React from 'react'
import eve1 from '../images/eve1.jpg'
import eve2 from '../images/eve2.jpg'
import eve3 from '../images/eve3.jpg'
import eve4 from '../images/eve4.jpg'
import eve5 from '../images/eve5.jpg'
import './Photoshoot.css'
function Photoshoot() {
  return (
    <div className='Photoshoot'>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" >
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
   </div>
    <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={eve1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Birthday Party</h5>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={eve2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Baby Shower</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={eve3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>NewBorn Photoshoot</h5>        
      </div>
    </div>
    <div class="carousel-item">
      <img src={eve4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Wedding Photoshoot</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={eve5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Prewedding Photoshoot</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Photoshoot