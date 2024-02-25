import React from 'react';
import './CartProduct.css';
import { MdDelete } from "react-icons/md";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function CartProduct({cart, removeItem, clearCart, total_price, shipping_fee}) {
    const navigate = useNavigate();

    const continueShop = () =>{
        navigate('/Order');
    }
    
    if(cart.length === 0){
        return(
            <div className='empty-cart'>
                <h1>No cart in the cart</h1>
                <BsEmojiFrown className='BsEmojiFrown' />
            </div>
        )
    }
    return (
        <div className='all-cart-product'>
            <div className="container cart-product pt-5">
                <table>
                    <tr>
                        <th>Content</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                    <tbody>
                        {
                            cart.map((element) =>{
                            const {id, img, price, name, amount} = element;
                                return(
                                <tr key={id}>
                                <td className='product-cart-img'>
                                    <div>
                                        <img src={img} alt={name} />
                                        <div>
                                            <p className='cart-name'>{name.length > 30 ? name.slice(0, 30) + '...' : name}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className='price'>{price}৳</td>
                                <td>
                                    {amount}
                                </td>
                                <td className='price'>{price * amount}৳ </td>
                                <td>
                                    <MdDelete onClick={()=> removeItem(id)} className='cart-delete-icon' />
                                </td>
                            </tr>
                                )
                            })
                        }
                    </tbody>
                </table>


                <div className='d-flex justify-content-between'>
                    <button onClick={continueShop} className='btn btn-primary mt-3'>Continue Shop</button>
                    <button onClick={clearCart} className='btn btn-danger mt-3'>Clear Cart</button>
                </div>
                <div className='d-flex justify-content-end mt-4'>
                    <div>
                        <p>SubTotal: {total_price}৳</p>
                        <p>Shipping Fee: {shipping_fee}৳</p>
                        <hr />
                        <p>Total Price: {total_price + shipping_fee}৳</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct