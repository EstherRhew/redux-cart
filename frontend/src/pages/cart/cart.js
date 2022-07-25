import React from 'react';
import {useSelector} from "react-redux";
import styles from './cart.module.css'
import ProductItem from "../../components/productItem/productItem";

const Cart = () => {
  const cart = useSelector(store => store.cart);

  return (
      <ul className={styles.list}>
      {cart.map((item) =>
        <ProductItem item={item} key={item.timestamp}/>
      )}
      </ul>
  );
};

export default Cart;
