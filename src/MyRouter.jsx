import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

import Show from './components/Context/Show'
import Products from './Pages/Products'
import Productdetail from './Pages/Productdetail'
import Carts from './Pages/Carts'
import TestCart from './Redux/reducers/TestCart'
const MyRouter = () => {
  return (
    <>
    <Router>

        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Signup' element={<Signup/>}/>
        
            <Route path='productdetail/:product_id' element={<Productdetail/>}/>
            <Route path='Products' element={<Products/>}/>   
            <Route path='carts' element={<Carts/>}/>
                </Route>
              <Route path='context' element={<Show/>}/>
              <Route path='redux/cart' element={<TestCart/>}/>
          
          </Routes>

    </Router>
    
    </>
  )
}

export default MyRouter