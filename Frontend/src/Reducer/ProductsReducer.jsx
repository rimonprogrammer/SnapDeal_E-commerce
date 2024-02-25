const reducer = (state, action) =>{
    let {product} = state;

    switch(action.type){
        case "SET_ALL_PRODUCT_LOADING" :
            return{
                ...state,
                isLoading : true
            }

        // all products
        case "ALL_PRODUCT_PRODUCT" : 
            return{
                ...state,
                isLoading : false,
                product : action.payload
            } 

        // feature product
        case "FEATURE_PRODUCT" :
            const feature = product.filter((element) =>{
                return element.feature === true;
            });
            return{
                ...state,
                isLoading : false,
                featureProduct : feature
            }


        // best selling product
        case "BEST_SALE_PRODUCT" :
            const bestSale = product.filter((element) =>{
                return element.bestSale === true;
            });
            return{
                ...state,
                isLoading : false,
                bestSaleProduct : bestSale
            }

        // best selling product
        case "TRENDING_PRODUCT" :
            const trending = product.filter((element) =>{
                return element.trending === true;
            });
            return{
                ...state,
                isLoading : false,
                trendingProduct : trending
            }

        // MENS categories product
        case "MENS_PRODUCT" :
            const mens = product.filter((element) =>{
                return element.topCategory === "Men's";
            }); 
            return{
                ...state,
                isLoading : false,
                mensProduct : mens
            }

        // WOMEN categories product
        case "WOMEN_PRODUCT" :
            const women = product.filter((element) =>{
                return element.topCategory === "Women's";
            }); 
            return{
                ...state,
                isLoading : false,
                womenProduct : women
            }

        // KIDS categories product
        case "KIDS_PRODUCT" :
            const kids = product.filter((element) =>{
                return element.topCategory === "Kids";
            }); 
            return{
                ...state,
                isLoading : false,
                kidsProduct : kids
            }

        // single product 
        case "SET_SINGLE_LOADING" :
            return{
                ...state,
                isSingleLoading : true
            }
        case "SINGLE_PRODUCT" :
            return{
                ...state,
                isSingleLoading : false,
                singleProduct : action.payload
            }

        default :
            return state
    }
}

export default reducer;