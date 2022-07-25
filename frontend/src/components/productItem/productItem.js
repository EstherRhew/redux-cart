import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addCart, deleteCart} from "../../store/actions/cartAction";
import {useLocation} from "react-router-dom";
import styles from './productItem.module.css'
import cartIcon from '../../assets/image/cart-shopping-solid.svg'
import Modal from "../modal/modal";

const ProductItem = ({item}) => {
  const [modal, setModal] = useState(false)
  const dispatch = useDispatch();
  const location = useLocation();

  const onClickAddToCart = () => {
    dispatch(addCart(item))
    setModal(true)
  }

  const onClickDelete = () => {
    dispatch(deleteCart(item))
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
    <li className={styles.item}>
      <div className={styles.img_box}>
        <img src={item.product_img} alt="thumb"/>
      </div>
      <div className={styles.info}>
        <span className={styles.price}>{item.price}</span>
        <span className={styles.name}>{item.product_name}</span>
        {location.pathname === '/'
          ? <button onClick={onClickAddToCart} className={styles.button}>
            <img src={cartIcon} alt=""/>
          </button>
          : <button onClick={onClickDelete} className={styles.button}>
            delete
          </button>
        }
      </div>
    </li>
      {modal && <Modal closeModal={closeModal}/>}
    </>
  );
};

export default ProductItem;
