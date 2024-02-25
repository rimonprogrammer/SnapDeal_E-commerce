import React from 'react';
import './Category.css';
import shirt from '../../assets/img/shirt.jpg';
import kids from '../../assets/img/kids.jpg';
import shoes from '../../assets/img/shoe.jpg';
import shari from '../../assets/img/shari.jpg';
import watch from '../../assets/img/watch.jpg';
import bag from '../../assets/img/bag.jpg';
import jeans from '../../assets/img/jeans.jpg';
import shortPant from '../../assets/img/half-pant.jpg';
import Panjabi from '../../assets/img/panjabi.jpg';
import Three_pice from '../../assets/img/three-pice.jpg';
import sunglass from '../../assets/img/sunglass.jpg';
import hijab from '../../assets/img/hijab.jpg';
import mekup from '../../assets/img/mekup.jpg';
import jacket from '../../assets/img/jacket.jpg';
import { Link } from 'react-router-dom';
import { useFilterContext } from '../../Context/FilterProduct';

function Category({ textColor }) {
    const textLocalColor = JSON.parse(localStorage.getItem('textColor'));
    const {categoryFilter} = useFilterContext();

  return (
    <div>
        <div className="container">
            <h4 data-aos="zoom-in" data-aos-delay='100' style={textLocalColor ? textLocalColor : textColor} className='fw-bold text-center pt-5 pb-3'>Categories</h4>
            <div className='Catagories'>
                {
                    Categories.map((catagoriesItem, index) =>{
                        const {img, name, aosDelay} = catagoriesItem;

                        return(
                            <Link to='/Products' data-aos="fade-up" data-aos-delay={aosDelay} key={index} className='category-link text-decoration-none'>
                                <button
                                    value={name}
                                    onClick={categoryFilter}
                                    type="button" 
                                    name="category" 
                                    id="category" 
                                >
                                    <img src={img} alt={name} />
                                    <p className='pt-2 m-0' style={textColor}>{name}</p>
                                </button>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Category;


const Categories = [
    {
        name : "T-Shirt",
        img : shirt,
        aosDelay : 0
    },
    {
        name : "Kids",
        img : kids,
        aosDelay : 100
    },
    {
        name : "Shoes",
        img : shoes,
        aosDelay : 200
    },
    {
        name : "Shari",
        img : shari,
        aosDelay : 300
    },
    {
        name : "Watch",
        img : watch,
        aosDelay : 400
    },
    {
        name : "Bags",
        img : bag,
        aosDelay : 500
    },
    {
        name : "Jeans",
        img : jeans,
        aosDelay : 600
    },
    {
        name : "Short Pant",
        img : shortPant,
        aosDelay : 0
    },
    {
        name : "Panjabi",
        img : Panjabi,
        aosDelay : 100
    },
    {
        name : "Three-pice",
        img : Three_pice,
        aosDelay : 200
    },
    {
        name : "Sunglass",
        img : sunglass,
        aosDelay : 300
    },
    {
        name : "Hijab",
        img : hijab,
        aosDelay : 400
    },
    {
        name : "Mekup",
        img : mekup,
        aosDelay : 500
    },
    {
        name : "Jacket",
        img : jacket,
        aosDelay : 600
    }
]