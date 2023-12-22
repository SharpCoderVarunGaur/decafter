import React from 'react'
import logo from "./Images/worker-2.avif"
import logo2 from "./Images/worker-1.jpg"
import logo3 from "./Images/worker-5.avif"
import ProfileEmp from './profileEmp'

const Cursole = () => {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active"  style={{ backgroundColor:"red"}} >
      <img src={logo} class="d-block w-100" style={{ height:"400px",backgroundSize:"cover"}} alt="hello"/>
    </div>
    <div class="carousel-item">
      <img src={logo2} style={{height:"400px",backgroundSize:"cover"}} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={logo3} style={{height:"400px",backgroundSize:"cover"}} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>   
 <div>

   <ProfileEmp />
 </div>
      
    </>
  )
}

export default Cursole
