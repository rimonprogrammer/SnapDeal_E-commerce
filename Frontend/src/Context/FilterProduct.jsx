import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { useProductContext } from './ProductContext';
import reducer from '../Reducer/FilterReducer';

const FilterContext = createContext();

function FilterProduct({children}) {
    const {product} = useProductContext();

    const initialState = {
        filter_product : [],
        all_product : []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const [category, setCategory] = useState('all')
    const categoryFilter = (e) =>{
        const value = e.target.value;
        setCategory(value.toLowerCase());

        dispatch({type : "CATEGORY_FILTER", payload : {value}});
    }

    const search = (e) =>{
        const search_value = e.target.value.toLowerCase();
        dispatch({type : "SEARCH_FILTER", payload : search_value});
    }


    useEffect(()=>{
        dispatch({type : "GET_ALL_PRODUCT", payload : product});
    }, [product]);
  return (
    <FilterContext.Provider value={{...state, categoryFilter, search, category}}>
        {children}
    </FilterContext.Provider>
  )
}

const useFilterContext = () =>{
    return useContext(FilterContext);
}
export {FilterProduct, useFilterContext}