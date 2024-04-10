import React, { createContext, useState } from "react";

export const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    const sts= {
        Name: "Ram",
        Age:"Syam",
        Call:"Prabhu"
    }
  //  const [state,setState]=useState(H9)
// const update=()=>{

//     setTimeout(() => {
//         setState( {
//             Name: "Syam",
//             Age:"ram",
//             Call:"Prabhu"
//         })
//     }, 2000);


    

    return (
        <GlobalContext.Provider value={sts}>
            {props.children}
        </GlobalContext.Provider>
)
    }
export default GlobalContextProvider