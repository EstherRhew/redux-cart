import './App.css';
import {Route, Routes} from "react-router-dom";
import Cart from "./pages/cart/cart";
import Home from "./pages/home/home";
import Header from "./components/header/header";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
