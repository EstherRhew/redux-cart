import {ADD_ITEM, DELETE_ITEM, GET_ALL_ITEMS} from "../constants/marketConstant";
import axios from "axios";
import {marketService} from "../../service/marketService";

//액션 생성함수

export const getAllItems = () => async (dispatch) => {
  try {
    const list = marketService.getItemList();
    dispatch({type: GET_ALL_ITEMS, payload: list});
  } catch (err) {
    console.log(err)
  }

}

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