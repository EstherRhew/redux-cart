import {GET_ALL_ITEMS} from "../constants/marketConstant";

export const marketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return action.payload;
    default:
      return state;
  }
}