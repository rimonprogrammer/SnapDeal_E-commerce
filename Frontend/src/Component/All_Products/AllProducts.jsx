import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { useFilterContext } from '../../Context/FilterProduct';
import { IoIosCheckmarkCircle } from "react-icons/io";
import ProductFilter from './ProductFilter';
import { useThemeContext } from '../../Context/ThemeContext';
import spinner from '../../assets/img/spinner.gif';
import { useProductContext } from '../../Context/ProductContext';
import { Link } from 'react-router-dom';

function AllProducts() {
    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    const { heroBg, textColor } = useThemeContext();
    const {filter_product} = useFilterContext();
    const { isLoading } = useProductContext();

    if(isLoading){
        return (
            <div className='loader'>
                <img src={spinner} alt="SnapDeal e-commerce website's spinner" />
            </div>
        )
    }
  return (
    <div style={heroBgLocalColor ? heroBgLocalColor : heroBg} className='pb-5 pt-3' >
        <div className="d-flex container">
            <div className="" style={{width : '200px', height:'500px'}}>
                <ProductFilter textColor={textColor} textLocalColor={textLocalColor} />
            </div>
            <div className="column">
                <div className='all-products container'>
                    {
                        filter_product.map((element, index) =>{
                            const {id, img, name, price, aosDelay, review, stock, wholeSale, delivery} = element;
                            return(
                            <Link
                                to={`/SingleProduct/${id}`}
                                data-aos="fade-up" 
                                data-aos-delay={aosDelay}
                                className='product-card text-decoration-none' 
                                style={{maxWidth: '250px'}}
                                key={index}
                            >
                                <div className='product-img'>
                                    <div className='btn-overflow'></div>
                                    <img src={img} alt={name} />
                                </div>
                                <div className='product-details'>
                                    <h6 className='pt-2 fw-bold'>{ name.length > 45 ? name.slice(0, 45) + '...' : name}</h6>
                                    <p className='star m-0'>
                                        <FaStar className='star-icon' />
                                        <FaStar className='star-icon' />
                                        <FaStar className='star-icon' />
                                        <FaStarHalfAlt className='star-icon' />
                                        <FaRegStar className='star-icon' />
                                        <span className='ps-2'>{review} (custom reviews)</span>
                                    </p> 
                                    {
                                        delivery ? 
                                            <p className='m-0'>
                                                <IoIosCheckmarkCircle className='check-mark' />
                                                Free delivery
                                            </p> : null
                                    }
                                    {
                                        wholeSale ? 
                                            <p className='m-0'>
                                                <IoIosCheckmarkCircle className='check-mark' />
                                                WholeSale price
                                            </p> : null
                                    }
                                    <p className='m-0'>Stock: {stock}</p>
                                    <div className='m-0 d-flex'>
                                        <p className='tk-icon p-0 m-0'>৳ </p>
                                        <del className='p-0 pt-1 text-danger fw-bold'>{price + 115}</del>
                                    </div>
                                    <div className='m-0 d-flex text-success'>
                                        <p className='p-0 m-0 tk-icon'>৳</p>
                                        <span className='pt-1'>{price} </span>
                                    </div> 
                                </div>
                            </Link>
                            )
                        }) 
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProducts