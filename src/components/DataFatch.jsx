import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DataFatch = () => {

  const [product,setProduct]=useState([])

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products`)
    .then((res)=>{

      console.log(res.data)

      setProduct(res.data)
    
    })
    .catch((err)=>console.log(err))


  },[])
  return (
    <>

{
  product && product.map((item)=>{
      return(

        <>
        <h1 className='text-warning'>{item.title}</h1>
        <p className='text-danger'>{item.description}</p>
        </>
      )

      
        
      

  })
}

    </>
  )
}

export default DataFatch