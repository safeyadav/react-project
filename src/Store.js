import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./Redux/reducers/cartReducers";
import nameReducer from "./Redux/reducers/studentReducer";



const combain=combineReducers({
    cart:cartReducer,
    student: nameReducer


})

const some=legacy_createStore(combain)

export default some