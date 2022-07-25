import {ADD_ITEM, DELETE_ITEM} from "../constants/cartConstant";

export const addCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  }
}

export const deleteCart = (items) => {
  return {
    type: DELETE_ITEM,
    payload: items
  }
}