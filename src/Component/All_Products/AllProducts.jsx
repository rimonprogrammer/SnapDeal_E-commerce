import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useThemeContext } from '../../Context/ThemeContext';
import { Link } from 'react-router-dom';
import { useSearchParams, useNavigate } from "react-router-dom";
import Data from '../../API'
import { useState } from 'react';
import './Product.css';

function AllProducts() {
    const navigate = useNavigate();
    
    // search product 
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    const heroBgLocalColor = JSON.parse(localStorage.getItem('heroBg'));

    const { heroBg } = useThemeContext();

        const getUniqueCategory = (data, property) => {
        let newValue = data.map((element) => element[property]);
        return ["All", ...new Set(newValue)];
    };

    const categoryData = getUniqueCategory(Data, "category");

    // search
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = Data.filter((item) => {
    const matchCategory =
        selectedCategory === "All" || item.category === selectedCategory;

        const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
    });

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate("/Products"); // search query clear
    };
  return (
    <div style={heroBgLocalColor ? heroBgLocalColor : heroBg} className='pb-5 pt-3' >
        <div className="d-flex container">
            {/* category filter */}
            <div className="category-sec" style={{width : '200px', height:'500px'}}>
                <div className='Category'>
                    <h5 className='m-0'>Category:</h5>
                    <hr className='mt-1 m-0' />

                    <div className='catagoryFilter'>
                    {
                        categoryData.map((Pro_category, index) => {
                        return (
                            <button
                            key={index}
                            type="button"
                            className={`${selectedCategory === Pro_category ? 'category-selected' : ''} ${selectedCategory === "All" ? "Category_All" : ""}`}
                            onClick={() => handleCategoryClick(Pro_category)}
                            >
                            {Pro_category}
                            </button>
                        );
                        })
                    }
                    </div>
                </div>
            </div>
            {/* category filter */}

            <div className="column">
                <div className='all-products container'>
                    {
                        filteredProducts.map((element, index) =>{
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