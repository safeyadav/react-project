import React,{useContext, useEffect} from 'react'
import { GlobalContext } from './GlobalContext'

const ComD = () => {
    const js=useContext(GlobalContext)

    // useEffect(()=>{
    //     js.update()
    // },[])

  return (
    <>
        {/* <h1>This is may local page{js.Name} and he is {js.Age} years old</h1> */}
    
    <h1>Name: {js.Name}</h1>
    <h2>Age: {js.Age}</h2>
    <h3>Call: {js.Call}</h3>
    </> 
  )
}

export default ComD