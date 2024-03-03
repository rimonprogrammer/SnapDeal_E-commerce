import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from './Context/ThemeContext.jsx';
import 'slick-carousel/slick/slick.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ProductContext } from './Context/ProductContext.jsx';
import { FilterProduct } from './Context/FilterProduct.jsx';
import { Cart_Context } from './Context/Cart_Context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
                <ThemeContext>
                    <ProductContext>
                        <FilterProduct>
                            <Cart_Context>
                                <App/>
                            </Cart_Context>
                        </FilterProduct>
                    </ProductContext>
                </ThemeContext>
        </BrowserRouter>
    </React.StrictMode>
)
