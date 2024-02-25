import React, { useEffect, useState } from 'react';
import './ParticularProduct.css';
import { useProductContext } from '../../Context/ProductContext';
import { useParams } from 'react-router-dom';
import spinner from '../../assets/img/spinner.gif';
import { useThemeContext } from '../../Context/ThemeContext';
import AmountToggle from './AmountToggle';
import { useCartContext } from '../../Context/Cart_Context';

function ParticularProduct() {
    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    const {addToCart } = useCartContext();
    const { heroBg, textColor } = useThemeContext();
    const {id} = useParams();
   
    const {GetSingleProduct, singleProduct, isSingleLoading} = useProductContext();
  
    const {img, name, price, rating, review, stock, topCategory, delivery, warranty, wholeSale } = singleProduct;

    useEffect(()=>{
        GetSingleProduct(`https://SnapDeal-e-commerce-api.onrender.com/Products/${id}`);
    }, []);

    const [amount, setAmount] = useState(1);
    const SetIncrements = () =>{
        amount <= stock ? setAmount(amount + 1) : amount
    }
    const SetDecrease = () =>{
        amount > 1 ? setAmount(amount - 1) : amount 
    }

    return (
    <div style={heroBgLocalColor ? heroBgLocalColor : heroBg}>
        <div className="container">
            {
                isSingleLoading ? 
                <div className='loader'>
                    <img src={spinner} alt="SnapDeal e-commerce website's spinner" />
                </div> : 
                <div className="row particular-product-details">
                    <div className="col-md-6 pt-2 particular-product-img">
                        <img src={img} alt={name} />
                    </div>
                    <div className="col-md-6 pt-2">
                        <h4 style={textLocalColor ? textLocalColor : textColor}>{name}</h4>
                        <p style={textLocalColor ? textLocalColor : textColor}>ID: {id}</p>
                        <del className='text-danger'>MRP: {price + 110}</del>
                        <p style={textLocalColor ? textLocalColor : textColor}>Price: {price}</p>
                        <p style={textLocalColor ? textLocalColor : textColor}>Rating {rating} <span>{review}(custom review)</span> </p>
                        <p style={textLocalColor ? textLocalColor : textColor}>Stock: {stock}</p>
                        <p style={textLocalColor ? textLocalColor : textColor}>Just for: {topCategory}</p>
                        {
                            delivery ? <p style={textLocalColor ? textLocalColor : textColor}>Free Delivery</p> : null
                        }
                        {
                            warranty ? <p style={textLocalColor ? textLocalColor : textColor}>Free Delivery</p> : null
                        }
                        {
                            wholeSale ? <p style={textLocalColor ? textLocalColor : textColor}>WholeSale price</p> : null
                        }
                        <AmountToggle addToCart={addToCart} amount={amount} SetIncrements={SetIncrements} SetDecrease={SetDecrease} singleProduct={singleProduct} id={id}  />
                    </div>
                </div>
            }
        </div>
    </div>
  )
}

export default ParticularProduct;