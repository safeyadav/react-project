import React from 'react'
import { useSelector } from 'react-redux'
import TestItem from './TestItem'
import Student from '../Student'


const TestCart = () => {
  // const data=useSelector(store=>store.cart)

  const data=useSelector(store=>store.cart)
  return (
    <>  
<h1>This is my favourate number is {data.count}</h1>

<TestItem/>
<Student/>
    </>
  )
}

export default TestCart