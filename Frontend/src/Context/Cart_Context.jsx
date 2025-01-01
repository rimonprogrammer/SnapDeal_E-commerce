import { useContext, useReducer, createContext, useEffect } from 'react';
import reducer from '../Reducer/Cart_Reducer';

const CartContext = createContext();

function Cart_Context({children}) {

    const getlocalData = () =>{
        let localData = localStorage.getItem('SnapDeal_Cart');

        if(localData === null){
            return [];
        }
        else{
            return JSON.parse(localData);
        }
    }
    const initialState = {
        cart : getlocalData(),
        total_item : [],
        total_price : [],
        shipping_fee : 120
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    // add to cart functionality start
    const addToCart = (id, amount, singleProducts ) => {
        dispatch({type : 'ADD_TO_CART', payload : {id, amount, singleProducts}})
    }
    // add to cart functionality end

    // remove the items in the cart
    const removeItem = (id) =>{
        dispatch({type : 'REMOVE_ITEM', payload : id});
    }

    const clearCart = () =>{
        dispatch({type : 'CLEAR_CART'});
    }


    useEffect(()=>{
        dispatch({type : 'CART_TOTAL_ITEM'});
        dispatch({type : 'CART_TOTAL_PRICE'});
        localStorage.setItem('SnapDeal_Cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{...state, addToCart, removeItem, clearCart}}>
                {children}
        </CartContext.Provider>
    )
}

const useCartContext = () =>{
    return useContext(CartContext);
}
export {Cart_Context, useCartContext};