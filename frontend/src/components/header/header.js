import React from 'react';
import styles from './header.module.css'
import home from '../../assets/image/house-solid.svg'
import cart from '../../assets/image/cart-shopping-solid.svg'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <img src={home} alt="cart" className={styles.home_icon}/>
      </Link>
      <Link to='/cart' className={styles.link}>
        <img src={cart} alt="cart" className={styles.cart_icon}/>
      </Link>
    </header>
  );
};

export default Header;
