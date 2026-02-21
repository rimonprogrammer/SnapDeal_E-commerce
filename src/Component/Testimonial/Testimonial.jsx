import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import cotation from '../../assets/img/cotation.png';
import img1 from '../../assets/img/testimonial-1.jpg';
import img2 from '../../assets/img/testimonial-2.jpg';
import img3 from '../../assets/img/testimonial-3.jpg';
import img4 from '../../assets/img/testimonial-4.jpg';
import img5 from '../../assets/img/testimonial-5.jpg';
import img6 from '../../assets/img/testimonial-6.jpg';

function Testimonial({textColor}) {
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));

    let setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    }
  return (
    <div className='pt-5 pb-5'>
        <h2 style={textLocalColor ? textLocalColor : textColor} className='text-center pt-5' data-aos="fade-up" data-aos-delay='100'>Testimonial</h2>
        <p style={textLocalColor ? textLocalColor : textColor} className='text-center' data-aos="fade-up" data-aos-delay='200'>What our customers are saying!</p>
        <div className="container">
            <Slider {...setting}>
            {
                testimonial.map((element, index) =>{
                    const {img, cotationImg, name, description} = element;

                    return(
                        <div key={index} className='testimonial'>
                            <div className='testimonial-box' data-aos="zoom-in"> 
                                <div className="testimonial-img">
                                    <img src={img} alt={name} />
                                </div>
                                <div className='testimonial-quotation'>
                                    <img src={cotationImg} alt="cotation logo" />
                                </div>
                                <div className='testimonial-details'>
                                    <p>{description}</p>
                                    <h5>{name}</h5>
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

export default Testimonial;

const testimonial = [
    {
        img : img1,
        cotationImg : cotation,
        name : "Johnson Smith",
        description : "Quick delivery and fantastic customer support. I had an issue with my order, and they resolved it within hours. Impressive service!"
    },
    {
        img : img2,
        cotationImg : cotation,
        name : "Davis Brown",
        description : "Reliable and trustworthy. I've been a customer for years and have never been disappointed. Quality products and timely delivery every time"
    },
    {
        img : img3,
        cotationImg : cotation,
        name : "Thompson Moore",
        description : "Exceptional customer care! I had a problem with a damaged item, and they sent a replacement right away. Great service that values its customers."
    },
    {
        img : img4,
        cotationImg : cotation,
        name : "Walker Lee",
        description : "Super fast shipping! I ordered yesterday, and my package arrived today. Impressed with the efficiency and care in packaging."
    },
    {
        img : img5,
        cotationImg : cotation,
        name : "Robinson Taylor",
        description : "The return process was hassle-free. I appreciate how they prioritize customer satisfaction. Will definitely shop here again."
    },
    {
        img : img6,
        cotationImg : cotation,
        name : "Young Allen",
        description : "Quality is their priority. Everything I've purchased has been durable and long-lasting. No compromises on excellence."
    }
]