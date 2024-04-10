const initialData={
    count:1000
}
// reducer used for logic build or centralised data create
const cartReducer=(state=initialData,action)=>{
    //return state

    //for cartItem

    switch(action.type){
        case 'Add_To_Cart':
            return{
                count:++state.count
            }
            case 'Remove_From_Cart':
            return{
                count:--state.count
            }

            default:
                return state
    }
}

export default cartReducer