import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>


<div className="container-fluid">
        <div className="row">
          <div className="col col-md-8 col-lg-6 col-xl-7 p-5 p-md m-auto">
          
            <main className="form-signin w-100 m-auto">
              <form className="my-5 border p-3 rounded-4 shadow-lg border-info"> 
                <div className="text-center">

                  <img className="mb-4 rounded-circle" src="/image/virat.png" alt="" width="72" height="57"/>
                </div>
                <h1 className="h3 mb-3 fw-normal">Welcome to my Page! Please Login</h1>
            
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput">Email address</label>
                  <span id="emailMsg"></span>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>
            
                <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Remember me
                  </label>
                </div>
                <button className="btn btn-warning fs-4 w-100 py-2" type="submit">LOGIN</button>
                <p>or login with</p>
             <Link to="/"> <button className='btn btn-primary w-100  fs-2 mb-2  ' ><i className='bi bi-facebook'>acebook</i></button></Link>
              
             <Link to="/"> <button className='btn btn-danger w-100  fs-3 mt-3' ><i className='bi bi-google '>oogle</i></button></Link>
                <div className="d-flex justify-content-between">
                  <h2 className='fs-6 fw-normal '>Do not have a account? <Link to="/Signup">Register</Link></h2>
                  <Link to="#">Forget Password</Link>
                                  </div>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2020–2025</p>
              </form>
            </main>

          </div>  
        </div>
      </div>





    </>
  )
}

export default Login