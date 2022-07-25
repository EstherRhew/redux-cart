import {ADD_ITEM, DELETE_ITEM} from "../constants/cartConstant";

export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      const updated = state.filter((item) => item !== action.payload)
      return updated;
    default:
      return state;
  }
}

