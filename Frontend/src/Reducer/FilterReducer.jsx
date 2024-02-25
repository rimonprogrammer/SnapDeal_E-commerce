const reducer = (state, action) =>{
    const {all_product} = state;

    switch(action.type){
        case "GET_ALL_PRODUCT" :
            return{
                ...state,
                filter_product : [...action.payload],
                all_product : [...action.payload],
            }

        case "CATEGORY_FILTER" :
            const { value } = action.payload;
            const category = value.toLowerCase();

            const product = [...all_product];

            let category_filter;

            category_filter = product.filter((element) =>{
                return element.category.toLowerCase() === category;
            });

            
            switch(category){
                case "all" :
                    category_filter = product
                    break;

                case "free delivery" :
                    const delivery = product.filter((element) =>{
                        return element.delivery === true;
                    });

                    category_filter = delivery;
                    break;

                case "best quality" :
                    const quality = product.filter((element) =>{
                        return element.feature === true;
                    });

                    category_filter = quality;
                    break;

                case "warranty" :
                    const warranty = product.filter((element) =>{
                        return element.warranty === true;
                    });

                    category_filter = warranty;
                    break;

                case "wholesale price" :
                    const wholeSale = product.filter((element) =>{
                        return element.wholeSale === true;
                    });

                    category_filter = wholeSale;
                    break;

                case "lowest price" :
                    const LowestPrice = product.filter((element) =>{
                        return element.price < 800;
                    });

                    category_filter = LowestPrice;
                    break;

                case "best price" :
                    const BestPrice = product.filter((element) =>{
                        return element.price < 1000 && element.price > 500;
                    });

                    category_filter = BestPrice;
                    break;
            }



            return{
                ...state,
                isLoading : false,
                filter_product : category_filter
            }
        // category filter end

        // SEARCH_FILTER start
        case "SEARCH_FILTER" :
            const product_Data = [...all_product];

            const search_result = product_Data.filter((element) =>{
                return element.name.toLowerCase().includes(action.payload);
            });

            return{
                ...state,
                isLoading : false,
                filter_product : search_result,
            }
    }
}

export default reducer;