import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import CartProduct from '../Component/CartProduct/CartProduct';
import { useCartContext } from '../Context/Cart_Context';

function Cart() {
  const {cart, removeItem, clearCart, total_price, shipping_fee} = useCartContext();

  return (
    <>
        <Navbar/>
        <CartProduct total_price={total_price} shipping_fee={shipping_fee} cart={cart} removeItem={removeItem} clearCart={clearCart} />
        <Footer/>
    </>
  )
}

export default Cart;