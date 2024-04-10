import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="p-3 text-white bg-dark ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
         
         
        </Link>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
          <li><Link to="/Products" className="nav-link px-2 text-white">Products</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">Pricing</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
          <li><Link to="#" className="nav-link px-2 text-white">About</Link></li>
        </ul>

        <form className="col-12 col-lg-auto mb-0 mb-lg-0 me-lg-5 d-flex w-50 " role="search">
          <input type="search " className="form-control form-control-dark text-bg-dark  rounded-end-0 btn-outline-none " placeholder="Search..." aria-label="Search"/>
          <button className='btn btn-warning rounded-start-0 '>Search...</button>
        </form>

        <div className="text-end">
       
          <Link to={"/Login"} className='btn btn-outline-light  mx-2'>Login</Link>
          
          <Link to={'/Signup'} className='btn btn-warning '>Sign-up</Link>

          
        </div>
      </div>
    </div>
  </header>

    
    
    </>
  )
}

export default Header