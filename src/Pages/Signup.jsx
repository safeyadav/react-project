
import React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Signup = () => {

  return (

    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmpassword: '',


      }}
      validationSchema={Yup.object({
        firstname: Yup.string()
          .required('first name is mandatory')
          .max(20, '20 charater or less'),

        firstname: Yup.string()
          .required('first name is mandatory')
          .max(20, '20 charater or less'),

        email: Yup.string()
          .required('email is mandatory')
          .email('email invalid'),

        password: Yup.string()
          .required('password is mandatory')
          .matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$%*!._])[a-zA-Z\d@!%*_.$]{8,20}$/, 
          'password contain one alphabate one digit one special and mpre then 8 and less then 20'),

          confirmpassword:Yup.string()
          .required('confirm password is mandatory')
          .matches([Yup.ref('password'),null], 'password and confirm password does not match')
      })}>




      <div className="container-fluid ">
        <div className="row ">
          <div className="col col-md-8 col-lg-6 col-xl-7 p-5 p-md m-auto">

            <main className="form-signin w-100 m-auto">
              <form className="my-2 border p-3 rounded-4 shadow-lg border-info">
                <div className="text-center">

                  <img className="mb-4 rounded-circle" src="/image/maxresdefault.jpg" alt="" width="80" height="70" />
                </div>
                <h1 className="h3 mb-3 fw-normal">Please Sign-up</h1>

                <div className="form-floating">
                  <label htmlFor="fname">First Name</label>
                  <Field type="text" className="form-control" id="fname" placeholder="First Name" name='fname' />
                  <ErrorMessage name='fname'>
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>


                  {/* <span id="fnameMsg"></span> */}
                </div>
                <div className="form-floating">
                  <Field type="text" className="form-control" id="lname" placeholder="Password" name='lname' />
                  <label htmlFor="floatingPassword">Last Name</label>
                  <ErrorMessage name='lname'>
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>

                  {/* <span id="lnameMsg"></span> */}
                </div>
                <div className="form-floating">
                  <input type="date" className="form-control " id="dov" />
                  <label htmlFor="dov">Date of Birth</label>
                </div>

                <div className="form-floating">
                  <div className="form-control d-flex justify-content-evenly ">


                    <div>
                      <input type="radio" name="gender" id="m" className="me-2" /><label htmlFor="m">Male</label>
                    </div>
                    <div>
                      <input type="radio" name="gender" id="f" className="me-2" /><label htmlFor="f">Female</label>
                    </div>
                    <div>
                      <input type="radio" name="gender" id="o" /> <label htmlFor="o" className="ms-2">Other</label>
                    </div>
                  </div>
                  <label>Gender</label>
                </div>

                <div className="form-floating">
                  <input type="file" name="file" id="file" />
                  <label htmlFor=""></label>
                </div>


                <div className="form-floating">
                  <select name="add" id="add" className="form-control">
                    <option value="" disabled selected>Choose Your City</option>
                    <option value="ktm">Kathmandu</option>
                    <option value="ktm">Lumbini</option>
                    <option value="ktm">Pokhara</option>
                    <option value="ktm">Butwal</option>
                    <option value="ktm">Birgunj</option>
                    <option value="ktm"></option>



                  </select>
                  <label htmlFor="add"> Address</label>
                </div>

                <div className="form-floating">
                  <textarea name="" id="" className="form-control " placeholder="xyz"></textarea>
                  <label htmlFor="dec">About Yourself</label>
                </div>

                <div className="form-floating">
                  <Field type="text" className="form-control" id="email" placeholder="email address" name='email' />
                  <label htmlFor="floatingPassword" className="form-label ">Email Address</label>
                  <ErrorMessage name='email'>
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>

                  {/* <span id="emailMsg"></span> */}
                </div>
                <div className="form-floating">
                  <Field type="password" className="form-control" placeholder="Password" id="password" />
                  <label htmlFor="password" className="form-label ">Password</label>
                  <ErrorMessage name='password'>
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>

                  {/* <span id="pswMsg"></span> */}

                </div>


                <div className="form-floating">
                  <Field type="password" className="form-control " placeholder="Confirm Password" id="cpassword" name='cpassword' />
                  <label htmlFor="form-label">Confirm Password</label>
                  <ErrorMessage name='cpassword'>
                    {msg => <div style={{ color: 'red' }}>{msg}</div>}
                  </ErrorMessage>

                  <span id="cpswMsg"></span>

                </div>

                <div className="form-check text-start my-3">
                  <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I accepts the terms and condition
                  </label>
                </div>
                <button className="btn btn-primary  w-100 py-2" type="submit">Register</button>
                <div className="d-flex justify-content-between">
                  {/* <span>Already have an account? <Link to="#">Register</Link></span> */}

                </div>
                <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
              </form>
            </main>

          </div>
        </div>
      </div>

    </Formik>




  )
}

export default Signup