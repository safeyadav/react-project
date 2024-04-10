import React from 'react'



const Carousel = () => {
  return (
    <>

<div id="carouselExampleCaptions" className="carousel slide bg-dark  ">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/image/hp.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>HP Envy</h5>
        <p>The embrace of foldable displays that transform laptops to componentized desktops.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image/ear.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Headphone</h5>
        <p>Bestselling earbuds, headphone and more.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/image/maxresdefault.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Rolex SA</h5>
        <p>Swiss luxury watch designer and manufacturer.</p>
      </div>
    </div>
  
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>





    </>
  )
}

export default Carousel