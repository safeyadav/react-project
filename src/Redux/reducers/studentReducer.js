const initialData={
    stdName:'SitaRam Ram'

}
// Reducer used for ligic build or centralised  data create
const nameReducer=(state=initialData,action)=>{

    switch(action.type){
        case 'ADD':
            return{
                ...state,
                stdName:action.payload
            }



        default:
            return state
    }

}

export default nameReducer
