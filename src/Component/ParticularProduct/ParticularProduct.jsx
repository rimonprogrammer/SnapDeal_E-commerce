import React from 'react';
import './ParticularProduct.css';
import { useParams } from 'react-router-dom';
import { useThemeContext } from '../../Context/ThemeContext';
import Data from '../../API'

function ParticularProduct() {
    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    const { heroBg, textColor } = useThemeContext();
    const {id} = useParams();


    return (
    <div style={heroBgLocalColor ? heroBgLocalColor : heroBg}>
        <div className="container">
            <div>
                {
                    Data.filter((element) => element.id === id)
                    .map((product, index) =>{
                        const {id, img, name, price, stock, rating,category, topCategory} = product;
                        return(
                            <div className="row particular-product-details">
                                <div className="col-md-6 pt-2 particular-product-img">
                                    <img src={img} alt={name} />
                                </div>
                                <div className="col-md-6 pt-2">
                                    <h4 style={textLocalColor ? textLocalColor : textColor}>{name}</h4>
                                    <p style={textLocalColor ? textLocalColor : textColor}>ID: {id}</p>
                                    <del className='text-danger'>MRP: {price + 110}</del>
                                    <p style={textLocalColor ? textLocalColor : textColor}>Price: {price}</p>
                                    <p style={textLocalColor ? textLocalColor : textColor}>Stock: {stock}</p>
                                    <p style={textLocalColor ? textLocalColor : textColor}>Category: {category}</p>
                                    <p style={textLocalColor ? textLocalColor : textColor}>Rating {rating} <span>Rating: {rating}</span> </p>
                                    <p style={textLocalColor ? textLocalColor : textColor}>Just for: {topCategory}</p> 
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default ParticularProduct;