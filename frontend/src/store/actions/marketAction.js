import {GET_ALL_ITEMS} from "../constants/marketConstant";
import {marketService} from "../../service/marketService";

//액션 생성함수

export const getAllItems = () => async (dispatch) => {
  try {
    const {list} = await marketService.getItemList();
    console.log(list, 'list22')
    dispatch({type: GET_ALL_ITEMS, payload: list});
  } catch (err) {
    console.log(err)
  }

}

