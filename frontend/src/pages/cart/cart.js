import React from 'react';
import {useSelector} from "react-redux";
import CartItem from "../../components/cartList/cartItem";

const Cart = () => {
  const cart = useSelector(store => store.cart);

  return (
    <ul>
      {cart.map((item) =>
        <CartItem item={item}/>
      )}
    </ul>
  );
};

export default Cart;
