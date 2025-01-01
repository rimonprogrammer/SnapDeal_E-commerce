import React from 'react'
import { useProductContext } from '../Context/ProductContext';
import { useThemeContext } from '../Context/ThemeContext';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Footer/Footer';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import spinner from '../assets/img/spinner.gif';
import { Link } from 'react-router-dom';

function Kids() {
    const { kidsProduct, isLoading } = useProductContext();
    const { heroBg, textColor } = useThemeContext();
    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    return (
        <>
            <Navbar/>
            {
                isLoading ? 
                <div className='loader'>
                    <img src={spinner} alt="SnapDeal e-commerce website's spinner" />
                </div> : // loading end

                <div style={heroBgLocalColor ? heroBgLocalColor : heroBg} className='pb-5 ' >
                    <h2 style={textLocalColor ? textLocalColor : textColor} data-aos="fade-up" className='text-center p-1'>Men's Product</h2>
                    <div className='all-products container'>
                        {
                            kidsProduct.map((element, index) =>{
                                const {id, img, name, price, aosDelay, review, stock} = element;
                                return(
                                <Link
                                    to={`/SingleProduct/${id}`} 
                                    data-aos="fade-up" 
                                    data-aos-delay={aosDelay}
                                    className='product-card text-decoration-none' 
                                    key={index}
                                >
                                    <div className='product-img'>
                                        <div className='btn-overflow'></div>
                                        <img src={img} alt={name} />
                                    </div>
                                    <div className='review'>
                                        <h6 className='pt-2'>{name.slice(0, 50)}</h6>
                                        <p className='star m-0'>
                                            <FaStar className='star-icon' />
                                            <FaStar className='star-icon' />
                                            <FaStar className='star-icon' />
                                            <FaStarHalfAlt className='star-icon' />
                                            <FaRegStar className='star-icon' />
                                            <span className='ps-2'>{review} (custom reviews)</span>
                                        </p> 
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
            }
            <Footer/>
        </>
    )
}

export default Kids