import React from 'react'
import { UseDispatch, useDispatch } from 'react-redux'

const TestItem = () => {
    const dispatch=useDispatch()

    const increase=()=>{
        dispatch({type:'Add_To_Cart'})
    }

    const decrease=()=>{
        dispatch({type:'Remove_From_Cart'})
    }
  return (
    <>
    <button className='btn btn-success' onClick={increase}>+</button>
    &nbsp; &nbsp;
    <button className='btn btn-danger' onClick={decrease}> -</button>


    </>
  )
}

export default TestItem