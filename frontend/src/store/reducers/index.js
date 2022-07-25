import {combineReducers} from "redux";
import {cartReducer} from "./cartReducer";
import {marketReducer} from "./marketReducer";

export default combineReducers({
  cart: cartReducer,
  market: marketReducer
})