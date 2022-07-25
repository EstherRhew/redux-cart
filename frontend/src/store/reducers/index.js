import {combineReducers} from "redux";
import {cartReducer, marketReducer} from "./cartReducer";

export default combineReducers({
  cart: cartReducer,
  market: marketReducer
})