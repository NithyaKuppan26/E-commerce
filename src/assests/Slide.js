import React from 'react'
import banner1 from './banner01.jpg'
import banner2 from './banner02.jpg'
import banner3 from './banner03.jpg'
import banner4 from './banner04.jpg'

function Slide() {
  return (
    <div className='slideDiv'>
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100" alt="banner1"/>
    </div>
    <div class="carousel-item">
      <img src={banner2} class="d-block w-100" alt="banner2"/>
    </div>
    <div class="carousel-item">
      <img src={banner3} class="d-block w-100" alt="banner3"/>
    </div>
    <div class="carousel-item">
      <img src={banner4} class="d-block w-100" alt="banner4"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slide