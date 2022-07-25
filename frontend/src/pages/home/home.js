import React, {useEffect} from 'react';
// import productListData from '../../assets/data/productList.json'
import ProductItem from "../../components/productItem/productItem";
import {useDispatch, useSelector} from "react-redux";
import {getAllItems} from "../../store/actions/marketAction";
import styles from './home.module.css'


const Home = () => {
  const dispatch = useDispatch();
  const market = useSelector(store => store.market);

  useEffect(() => {
    dispatch(getAllItems());
  }, [dispatch])

  return (
      <ul className={styles.list}>
        {market.map((item) =>
          <ProductItem item={item}  key={item.id}/>
        )}
      </ul>
  );
};

export default Home;
