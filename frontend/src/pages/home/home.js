import React, {useEffect} from 'react';
// import productListData from '../../assets/data/productList.json'
import ProductItem from "../../components/productItem/productItem";



const Home = () => {
  // const {productList} = productListData

  return (
    <main>
      <ul>
        {productList.map((item) =>
          <ProductItem item={item}  key={item.id}/>
        )}
      </ul>
    </main>
  );
};

export default Home;
