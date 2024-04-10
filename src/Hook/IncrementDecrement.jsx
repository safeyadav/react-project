import React, { useState } from 'react'

const IncrementDecrement = () => {

    const [num, setNum]= useState(1)
    
    
  return (
    <>

    <h1 className='text-primary'>{num}</h1>

{
    num<10 &&    <button className='btn btn-success'onClick={()=>setNum(num+1)}>In  crement</button>
 
    
}
    &nbsp; &nbsp;

{

    num>0 &&      <button className='btn btn-danger'onClick={()=>setNum(num-1)}>Decrement</button>
}




    
    
    </>
  )
}

export default IncrementDecrement