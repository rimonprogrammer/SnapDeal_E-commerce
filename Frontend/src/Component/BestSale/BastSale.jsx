import React from 'react';
import './BastSale.css';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import spinner from '../../assets/img/spinner.gif';
import { Link } from 'react-router-dom';

function BastSale({bestSaleProduct, textColor, isLoading}) {
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    if(isLoading){
        return (
            <div className='loader'>
                <img src={spinner} alt="SnapDeal e-commerce website's spinner" />
            </div>
        )
    }
  return (
    <div>
        <div className="container">
            <h2 style={textLocalColor ? textLocalColor : textColor} className='text-center pt-5' data-aos="fade-up" data-aos-delay='100'>Best product</h2>
            <p style={textLocalColor ? textLocalColor : textColor} className='text-center' data-aos="fade-up" data-aos-delay='200'>Best selling product just for you!</p>
            <div className="all-bast-product">
                {
                    bestSaleProduct.map((product, index) =>{
                        const {id, img, name, price, review, aosDelay} = product;
                        return(
                            <Link
                                to={`/SingleProduct/${id}`} 
                                data-aos="fade-up"
                                data-aos-delay={aosDelay}
                                 key={index} 
                                 className="best-product rounded text-decoration-none"
                            >
                                <div className="product-img rounded">
                                    <img src={img} alt={name} />
                                </div>
                                <p className='bast-product-star m-0 pt-2'>
                                    <FaStar className='star-icon' />
                                    <FaStar className='star-icon' />
                                    <FaStar className='star-icon' />
                                    <FaStarHalfAlt className='star-icon' />
                                    <FaRegStar className='star-icon' />
                                    <span className='ps-2'>{review} (custom reviews)</span>
                                </p> 
                                <p className='text-center fw-bold pt-2'>{ name.length > 40 ? name.slice(0, 40) + '...' : name}</p>
                                <p className='text-center'>Price: {price}&#2547;</p>
                                <div className="d-flex justify-content-center">
                                    <button className='mt-2 add-to-cart'>View details</button>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default BastSale