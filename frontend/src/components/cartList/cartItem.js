import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCart} from "../../store/actions/cartAction";

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteCart(item))
  }

  return (
    <li>
      <div>
        <img src={item.product_img} alt="thumb"/>
      </div>
      <div>
        <span>{item.price}</span>
        <span>{item.product_name}</span>
        <button onClick={onClickDelete}>Delete from Cart</button>
      </div>
    </li>
  );
};

export default CartItem;
