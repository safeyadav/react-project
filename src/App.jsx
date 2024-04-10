

import React from 'react'
import MyRouter from './MyRouter'

// createStore used to know for the compiler that any reducer is a store
//import { legacy_createStore } from 'redux'

//provider is used to pass data from reducer to component
import { Provider } from 'react-redux'
//import cartReducer from './Redux/reducers/cartReducers'
 import store from './Store'


const  App=()=> {
  

 
  return (
    <Provider store={store}>
 
    <MyRouter/>
    
    </Provider>
  )
}

export default App



