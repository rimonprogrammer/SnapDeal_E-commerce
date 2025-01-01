import React from 'react';
import './Title.css';
import delivery from '../../assets/img/free-delivery.jpg';
import BestQuality from '../../assets/img/best-quality.jpg';
import warranty from '../../assets/img/warranty.jpg';
import wholesalePrice from '../../assets/img/wholesale-price.jpg';
import LowPrice from '../../assets/img/low-price.png';
import bestPrice from '../../assets/img/best price.jpg';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../Context/FilterProduct';

function Title({textColor}) {
    const {categoryFilter} = useFilterContext();
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));
  return (
    <div>
        <div className="container titles">
            {
                titles.map((element, index) =>{
                    const {img, title, aosDelay} = element;

                    return(
                        <Link 
                            to='/Products' 
                            data-aos="fade-up" 
                            data-aos-delay={aosDelay} 
                            key={index} className='title-link text-decoration-none'>
                            <button
                                value={title}
                                onClick={categoryFilter}
                                type="button" 
                                name="category" 
                                id="category" 
                            >
                                <img src={img} alt={title} />
                                <p style={textLocalColor ? textLocalColor : textColor}>{title}</p>
                                </button>
                        </Link>
 
                    )
                })
            }
        </div>
    </div>
  )
}

export default Title;

const titles = [
    {
        title : "Free Delivery",
        img : delivery,
        aosDelay : 0
    },
    {
        title : "Best Quality",
        img : BestQuality,
        aosDelay : 100
    },
    {
        title : "Warranty",
        img : warranty,
        aosDelay : 200
    },
    {
        title : "WholeSale Price",
        img : wholesalePrice,
        aosDelay : 300
    },
    {
        title : "Lowest Price",
        img : LowPrice,
        aosDelay : 400
    },
    {
        title : "Best Price",
        img : bestPrice,
        aosDelay : 500
    }
]