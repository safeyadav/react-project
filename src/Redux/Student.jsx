import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Student = () => {

    const [name,setName]=useState('')
    const veriable=useDispatch()

    const Ram=()=>{
        veriable({type:'ADD',payload:name})
    }

    const std=useSelector(store=>store.student)

  return (
    <>
        <h1>Ram Ram Ram Ram Ram Ram Ram {std.stdName}</h1>
        <h1>Technovate Internatioanl</h1>
        <input type="text" name="std" placeholder='Enter Name' onChange={e=>setName(e.target.value)} />

        &nbsp; &nbsp;

        <button className='btn btn-success' onClick={Ram}>Submit</button>
    </>
  )
}

export default Student