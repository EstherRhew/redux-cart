import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {addCart} from "../../store/actions/cartAction";

const ProductItem = ({item}) => {
  const dispatch = useDispatch();

  const onClickAddToCart = () => {
    dispatch(addCart(item))
  }

  return (
    <li>
      <div>
        <img src={item.product_img} alt="thumb"/>
      </div>
      <div>
        <span>{item.price}</span>
        <span>{item.product_name}</span>
        <button onClick={onClickAddToCart}>Add to Cart</button>
      </div>
    </li>
  );
};

export default ProductItem;
