
import React, { useState, useEffect } from 'react'
import Cart from '../components/Cart'
import axios from 'axios'

const Products = () => {

  const[products,setProducts]=useState([])

  useEffect(()=>{

    const fetchProduct=async()=>{
      const store=await axios.get('https://fakestoreapi.com/products')
      try{
        console.log(store.data)
        setProducts(store.data)

      }
      catch(err){
        console.log(err)

      }
    }
    fetchProduct()
   
  },[])


  return (


    <>


      <h3 className="mt-5 text-center mb-5 text-success text-decoration-underline">Department</h3>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5 px-sm-0">


        {
          products.map((product,i)=>(
           
           
           <Cart key={i} item={product}/>
            )
            
         
          )
       }

        
        </div>
      </div>

    </>
  )
}

export default Products