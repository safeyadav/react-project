import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
    
<div className="container-fluid bg-black ">
  <footer className="py-5">
    <div className="row text-white">
      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-warning fs-bold'>With Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">About Us</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Digital Payment</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Terms & Conditions</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Privacy Policy</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Online Shopping App</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-warning fs-bold'>Coustomer Care</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Help Center</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">How to Buy</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Contect Us</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Returns & Refunds</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Purchase Protection</Link></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className='text-warning fw-bold'>Make Money With Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Our University</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Sell with Us</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Join Our Affiliate Program</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Visit on Social Media</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Search Our Website</Link></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3 text-white ">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white ">
      <p>&copy; 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-body-emphasis fs-3 " to="#"><i className='bi bi-twitter  text-primary '></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis fs-3 " to="#"><i className='bi bi-instagram  text-warning '></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis fs-3 " to="#"><i className='bi bi-facebook  text-primary '></i></Link></li>
        <li className="ms-3"><Link className="link-body-emphasis fs-3" to="#"><i className='bi bi-whatsapp  text-success '></i></Link></li>
      </ul>
    </div>
  </footer>
</div>
    
    </>




  )
}

export default Footer
