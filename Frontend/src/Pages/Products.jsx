import React from 'react'
import Navbar from './../Component/Navbar/Navbar';
import Footer from './../Component/Footer/Footer';
import AllProducts from '../Component/All_Products/AllProducts';

function Products() {

  return (
    <div>
        <Navbar/>
        <AllProducts/>
        <Footer/>
    </div>
  )
}

export default Products