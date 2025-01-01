import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import productss from '../API';
import reducer from '../Reducer/ProductsReducer';

const Product_Context = createContext();

function ProductContext({children}) {
    const initialState = {
        isLoading : false,
        product : [],
        featureProduct : [],
        bestSaleProduct : [],
        trendingProduct : [],
        mensProduct : [],
        womenProduct : [],
        kidsProduct : [],
        isSingleLoading : false,
        singleProduct : []
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const products = () =>{
        dispatch({type : "SET_ALL_PRODUCT_LOADING"});
        // const productResult = await axios.get('https://snapdeal-e-commerce-api.onrender.com/products');
        
        // const product_data =  productResult.data;
        const product_data =  productss;

        dispatch({type : "ALL_PRODUCT_PRODUCT", payload : product_data});

        dispatch({type : "FEATURE_PRODUCT"});

        dispatch({type : "BEST_SALE_PRODUCT"});

        dispatch({type : "TRENDING_PRODUCT"});

        dispatch({type : "MENS_PRODUCT"});

        dispatch({type : "WOMEN_PRODUCT"});

        dispatch({type : "KIDS_PRODUCT"});
    }

    useEffect(()=>{
        products();
    }, []);



    const GetSingleProduct = async (url) =>{
        dispatch({type : "SET_SINGLE_LOADING"});

        const singleProduct = await axios.get(url);
        const respons = await singleProduct.data;
        
        dispatch({type : "SINGLE_PRODUCT", payload : respons});
    }
  return (
        <Product_Context.Provider value={{...state, GetSingleProduct}}>
            {children}
        </Product_Context.Provider>
  )
}

const useProductContext = () =>{
    return useContext(Product_Context);
}
export {ProductContext, useProductContext}