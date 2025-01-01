import React from 'react';
import './WinterProduct.css';
import jacket from '../../assets/img/winter-jacket.jpg';
import delivery from '../../assets/img/free-delivery.jpg';
import BestQuality from '../../assets/img/best-quality.jpg';
import offer from '../../assets/img/offer.png';
import warranty from '../../assets/img/warranty.jpg';

function WinterProduct({textColor}) {
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));
  return (
    <div>
        <div className="container pt-5">
            <div className="row pt-5">
                <div className="col-md-6 winter-product-img">
                    <img data-aos="zoom-in" data-aos-delay='100' src={jacket} alt="winter jacket" />
                </div>
                <div className="col-md-6">
                    <h4 data-aos="fade-up" data-aos-delay='100' style={textLocalColor ? textLocalColor : textColor}>Winter Sale upto 50% Off</h4>
                    <p data-aos="fade-up" data-aos-delay='200' style={textLocalColor ? textLocalColor : textColor} className='pt-2'>Winter clothes are especially outerwear like coats, jackets, hats, scarves and gloves or mittens, earmuffs, but also warm underwear like long underwear</p>
                    <ul className='winter-product-details p-0'>
                        {
                            product.map((product, index) =>{
                                const {name, img, aosDelay} = product;
                                return(
                                    <li data-aos="fade-up" data-aos-delay={aosDelay} key={index}>
                                        <img src={img} alt={name} />
                                        <p style={textLocalColor ? textLocalColor : textColor}>{name}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WinterProduct;

const product = [
    {
        name : "Free Delivery",
        img : delivery,
        aosDelay : 0
    },
    {
        name : "Best Quality product",
        img : BestQuality,
        aosDelay : 100
    },
    {
        name : "Product Warranty",
        img : warranty,
        aosDelay : 200
    },
    {
        name : "Get Offer",
        img : offer,
        aosDelay : 300
    }
]