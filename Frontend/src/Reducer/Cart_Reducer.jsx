function Cart_Reducer(state, action) {
    switch (action.type) {

        case "ADD_TO_CART" :
            const {id, singleProducts, amount} = action.payload;

            let existProduct = state.cart.find((product) =>{
                return product.id === id
            })
            if(existProduct){
                let updatedProduct = state.cart.map((product) =>{
                    const {stock} = product;

                    if(product.id === id ){
                        let newAmount = amount + product.amount;
    
                        if(newAmount >= stock ){
                            return{
                                ...product,
                                amount : stock
                            }
                        }
                        else{
                            return{
                                ...product,
                                amount : newAmount
                            }
                        }
                    }
                    else{
                        return product
                    }
                });
                return{
                    ...state,
                    cart : updatedProduct
                }
            }
            else{
                let cart = {
                    id : id,
                    img : singleProducts.img,
                    name : singleProducts.name,
                    price : singleProducts.price,
                    stock : singleProducts.stock,
                    amount : amount
                }
                return{
                    ...state,
                    cart : [...state.cart, cart]
                }
            }


        // to delete just one cart
        case 'REMOVE_ITEM':
            let updatedCart = state.cart.filter((cart) =>{
                return cart.id !== action.payload
            })
            return{
                ...state,
                cart : updatedCart
            } 
        
        // to delete all the cart
        case "CLEAR_CART" :
            return{
                ...state,
                cart : []
            }



        // // total cart item
        case 'CART_TOTAL_ITEM' :
            let updateValue = state.cart.reduce((initialValue, curElem)=>{
                let { amount } = curElem;
    
                initialValue = initialValue + amount;
                return initialValue;
            }, 0);
            return{
                ...state,
                total_item : updateValue
            }


        // // total cart price + shipping charge
        case 'CART_TOTAL_PRICE' :
            let totalPrice = state.cart.reduce((initialValue, currElem)=>{
                let { price, amount } = currElem;
    
                initialValue = initialValue + (price * amount);
                return initialValue;
            },0);
            return{
                ...state,
                total_price : totalPrice
            }




        default:
            return state;
    }
}

export default Cart_Reducer;