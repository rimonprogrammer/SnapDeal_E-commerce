import React from 'react';
import './Hero.css';
import hero1 from '../../assets/img/hero-1.png'
import hero2 from '../../assets/img/hero-2.png'
import hero3 from '../../assets/img/hero-3.png'
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

function Hero({ heroBg, textColor, bgHeaderTop }) {
    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));
    const HeaderLocalTop = JSON.parse(localStorage.getItem('bgHeaderTop'));
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    let setting = {
        dots : false,
        arrows : false,
        Infinite : true,
        speed : 800,
        slidesToScroll : 1,
        autoplay : true,
        autoplaySpeed : 4000,
        cssEase : 'ease-in-out',
        paseOnHover : false,
        paseOnFocus : true
    }

    const navigate = useNavigate();
    const hero_order = () =>{
        navigate('/Products');
    }
  return (
    <div className='hero' style={heroBgLocalColor ? heroBgLocalColor : heroBg}>
        <div style={HeaderLocalTop ? HeaderLocalTop : bgHeaderTop} className="hero-overflow"></div>

        <div className='container'>
            <Slider {...setting}>
                {
                    slider.map((element, index) =>{
                        const {title, description, img} = element;

                        return(
                            <div key={index}>
                                <div className='row hero-slider'>
                                    <div className="col-md-6 hero-text">
                                        <h1 data-aos="zoom-out" className='fw-bold' style={textLocalColor ? textLocalColor :textColor}>{title}</h1>
                                        <p data-aos-delay={100} data-aos="fade-up" style={textLocalColor ? textLocalColor : textColor}>{description}</p>
                                        <button onClick={hero_order} data-aos-delay={100} data-aos="fade-up">Order Now</button>
                                    </div>
                                    <div className="col-md-6 hero-img">
                                        <img data-aos="zoom-in" src={img} alt="" />
                                    </div>
                                </div> 
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    </div>
  )
}

export default Hero;



const slider = [
    {
        title : "70% of on all Products sale",
        description : "SnapDeal is well-known for its wide range of products at big discount prices. SnapDeal even emphasizes on its USP of low rates for any item in their marketing",
        img : hero1
    },
    {
        title : "Up to 50% of on all Men's wear",
        description : "SnapDeal is well-known for its wide range of products at big discount prices. SnapDeal even emphasizes on its USP of low rates for any item in their marketing",
        img : hero2
    },
    {
        title : "30% of on all Women's wear",
        description : "SnapDeal is well-known for its wide range of products at big discount prices. SnapDeal even emphasizes on its USP of low rates for any item in their marketing",
        img : hero3
    },
]