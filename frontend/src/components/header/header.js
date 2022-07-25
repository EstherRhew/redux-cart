import React from 'react';
import styles from './header.module.css'
import homeIcon from '../../assets/image/house-solid.svg'
import cartIcon from '../../assets/image/cart-shopping-solid.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {
  const cart = useSelector(store => store.cart)

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <img src={homeIcon} alt="home" className={styles.icon}/>
      </Link>
      <Link to='/cart' className={styles.link}>
        <img src={cartIcon} alt="cart" className={styles.icon}/>
        <div className={styles.cart_count}>{cart.length}</div>
      </Link>
    </header>
  );
};

export default Header;
