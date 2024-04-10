
import React, { useEffect, useState } from 'react'

const Carts = () => {

const [product,setProduct]=useState([])

useEffect(()=>{
  const cartsItems=JSON.parse(localStorage.getItem('cartItem'))

  setProduct(cartsItems)
})


  return (
    <>
<div className="container">
  <div className="row d-flex justify-content-evenley">

    {
      product.length===0                                                  ?
      (
          <h1 className='text-danger'>Your Cart is empty</h1>
      )
      :
      (
       <h1>Carts</h1>
        )
    }
  </div>
</div>



    </>
  )
}

export default Carts