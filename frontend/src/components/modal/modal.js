import React from 'react';
import styles from './modal.module.css';
import {Link} from "react-router-dom";

const Modal = ({closeModal}) => {
  return (
    <div className={styles.modal_bg}>
    <div className={styles.modal}>
      <span className={styles.text}>장바구니에 상품이 담겼습니다.</span>
      <span className={styles.text}>장바구니로 이동하시겠습니까?</span>
      <div className={styles.buttons}>
        <Link to='/cart'><button className={styles.button}>장바구니로 이동</button></Link>
        <button className={styles.button} onClick={closeModal}>쇼핑 계속 하기</button>
      </div>
    </div>
    </div>
  );
};

export default Modal;
