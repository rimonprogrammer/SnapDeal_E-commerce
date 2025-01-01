import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Aos from 'aos';
import 'aos/dist/aos.css';
import Products from "./Pages/Products";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import Cart from "./Pages/Cart";
import SingleProduct from "./Pages/SingleProduct";
import Order from "./Component/Order/Order";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";

function App() {
  useEffect(()=>{
    Aos.init({
      offset : 100,
      duration : 400,
      easing : "ease-in-sine",
    })
    Aos.refresh();
}, []);

return (
    <> 
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Mens" element={<Mens/>} />
          <Route path="/Womens" element={<Womens/>} />
          <Route path="/Kids" element={<Kids/>} />
          <Route path="/Order" element={<Order/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
      </Routes>
    </>
  )
}

export default App
