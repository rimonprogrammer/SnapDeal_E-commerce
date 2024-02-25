import React from 'react';
import './FilterProduct.css';
import { useFilterContext } from '../../Context/FilterProduct';

function ProductFilter({textColor, textLocalColor}) {
    const { categoryFilter, category } = useFilterContext();
    
  return (
    <div className='ProductFilter'>
        <h5 style={textLocalColor ? textLocalColor : textColor}>Category</h5>
        <ul>
            {
                category_data.map((categories, index) =>{
                    const {name} = categories;

                    return(
                        <li key={index}>
                            <button 
                                style={textLocalColor ? textLocalColor : textColor}
                                onClick={categoryFilter} 
                                value={name} 
                                className={` ${name.toLocaleLowerCase() === category ? 'select_category' : ''} mb-2 border-0 text-start bg-transparent`}
                            >
                                    {name}
                                </button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default ProductFilter;

const category_data = [
    {
        name : "All"
    },
    {
        name : "T-Shirt"
    },
    {
        name : "Jeans"
    },
    {
        name : "Kids"
    },
    {
        name : "Shari"
    },
    {
        name : "Bags"
    },
    {
        name : "Jacket"
    },
    {
        name : "Watch"
    },
    {
        name : "Panjabi"
    },
    {
        name : "Shoes"
    },
    {
        name : "makeup"
    },
    {
        name : "Three-Pice"
    },
    {
        name : "Hijab"
    },
    {
        name : "Short-Pant"
    }
]


