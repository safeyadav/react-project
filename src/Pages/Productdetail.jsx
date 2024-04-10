import { useState, useEffect } from 'react'
import axios from 'axios'
import { json, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Productdetail = () => {

  const [product, setProduct]=useState({})

  const params=useParams()

  useEffect(()=>{

    const id=params.product_id

axios.get(`https://fakestoreapi.com/products/${id}`)

.then(res=>{
console.log(res.data)
setProduct(res.data)
})
.catch(err=>console.log(err))

  },[params.product_id])

  const addToCart=()=>{

    const cartItems= JSON.parse(localStorage.getItem('cartItem')) || []

    const productItem={
      id:product.id,
      title:product.title,
      image:product.image,
      price:product.price,
      category:product.category,
      quantity:1
    }
    

    // check if the items is present in the cart or not

    const exictItem=cartItems.find((item)=>item.id===product.id)

    if(exictItem){
      toast.error('Product is already in cart')
    }
    else{
      cartItems.push(productItem)
      localStorage.setItem('cardItem',JSON.stringify(cartItems))
      toast.success(`${product.title} is successfully add to cart`)
    }
    
  }
  return (
    <>
    <ToastContainer position="top-right" theme="colored"

/>
<div className="conainer d-flex justify-content-evenly">
  <div className="row">
    <div className="col-md-5 m-3 py-lg-5">

      <img src={product.image} alt={product.image} width={500} height={500} />

    </div>
    <div className="col-md-6 my-5">
      <h1 className='text-secondary'>{product.title}</h1>
      <h3 className='text-warning'>${product.price}</h3>
      <p className='text-dark'> {product.description}</p>
    <button className='btn btn-warning text-center' onClick={addToCart}>Add to cart</button>
    </div>
  </div>
</div>



    </>
  )
}

export default Productdetail