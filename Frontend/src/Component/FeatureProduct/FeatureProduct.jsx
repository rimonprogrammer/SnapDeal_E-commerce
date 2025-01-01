import './Product.css';
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import spinner from '../../assets/img/spinner.gif';
import { Link } from 'react-router-dom';

function FeatureProduct({isLoading, featureProduct, textColor}) {
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    if(isLoading){
        return (
            <div className='loader'>
                <img src={spinner} alt="SnapDeal e-commerce website's spinner" />
            </div>
        )
    }

  return (
    <div className='pb-5 pt-5' >
        <h2 style={textLocalColor ? textLocalColor : textColor} data-aos="fade-up" data-aos-delay='100' className='text-center fw-bold pt-5'>Feature Product</h2>
        <p style={textLocalColor ? textLocalColor : textColor} data-aos="fade-up" data-aos-delay='200' className='text-center pb-3'>Get your desired best quality product with 100% warranty</p>
            <div className='all-products container'>
                {
                    featureProduct.map((element, index) =>{
                        const {id, img, name, price, aosDelay, review, stock, delivery, wholeSale} = element;
                        return(
                           <Link 
                            to = {`/SingleProduct/${id}`}
                            data-aos = "fade-up" 
                            data-aos-delay = {aosDelay}
                            className = 'product-card text-decoration-none' 
                            key = {index}>
                                <div className='product-img'>
                                    <div className='btn-overflow'></div>
                                    <img src = {img} alt={name} />
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
                                            delivery ? <p>Free delivery</p> : null
                                    }
                                    {
                                        wholeSale ? <p>WholeSale price</p> : null
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
  )
}

export default FeatureProduct;

