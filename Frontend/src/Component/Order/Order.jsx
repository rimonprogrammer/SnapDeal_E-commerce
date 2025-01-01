import React from 'react';
import './Order.css';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';
import { useCartContext } from '../../Context/Cart_Context';
import { Link } from 'react-router-dom';

function Order() {
    const {cart, total_price, shipping_fee} = useCartContext();

  return (
    <>
        <Navbar/>
        <div className='pt-5 pb-5 order-page'>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 order-details">
                        <h5>Your order details</h5>
                        <table>
                            <tr>
                                <th>Content</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Shipping fee</th>
                                <th>Total cost</th>
                            </tr>
                            <tbody>
                                {
                                    cart.map((element, index) =>{
                                    const { price, name, amount} = element;
                                        return(
                                        <tr key={index}>
                                            <td className='product-cart-img'>
                                                <p className='cart-name'>{name.length > 30 ? name.slice(0, 30) + '...' : name}</p>
                                            </td>
                                            <td>
                                                {amount}
                                            </td>
                                            <td>{price}৳ </td>
                                            <td>{shipping_fee}৳ </td>
                                            <td>{total_price + shipping_fee}৳ </td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <Link to='/Cart'>
                            <button className='btn btn-danger mt-2'>Back</button>
                        </Link>
                    </div>
                    <div className="col-md-4 order-form-aria">
                        <form method='POST' action='https://formspree.io/f/mrgnebdq' className='order-form'>
                            <h5>Order now!</h5>
                            <input className='border-primary border-1 text-primary' required type="text" name="name" placeholder='Enter your name' autoFocus />
                            <input className='border-primary border-1 text-primary' required type="number" name="phone" placeholder='Enter your phone' />
                            <input className='border-primary border-1 text-primary' required type="email" name="email" placeholder='Enter your email' />
                            <input className='border-primary border-1 text-primary' required type="text" name="address" placeholder='Enter your address' />
                            <div>
                                <button className='btn btn-primary'>Submit Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/> 
    </>
  )
}

export default Order