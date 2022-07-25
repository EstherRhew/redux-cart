import {GET_ALL_ITEMS, ADD_ITEM, DELETE_ITEM} from "../constants/marketConstant";

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

export const marketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_ITEMS:
      return [...state, action.payload];
    default:
      return state;
  }
}