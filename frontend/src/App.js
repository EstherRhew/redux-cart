import './app.module.css';
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import styles from './app.module.css'

function App() {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
