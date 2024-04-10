import React, { useEffect, useState } from 'react'

const Effect = () => {
  const [data,setData]=useState(1)
  const [num,setNum]=useState(1)

  useEffect(()=>{
    alert('This is my page')

  },[]) //for dependency

  return (
    <>
    <div className="container d-flex my-3 justify-content-evenly ">
    <h1 className='text-warning  '>{data}</h1>
    <button className='btn btn-success ' onClick={()=>setData(data+1)}>Add</button> 
    <h1 className='text-warning'>{num}</h1> 
    <button className='btn btn-danger  ' onClick={()=>setNum(num-1)}>Dec</button>
    </div>
    </>
  )
}

export default Effect