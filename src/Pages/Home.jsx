import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Hero from '../Component/Hero/Hero'
import Category from '../Component/Category/Category'
import { useThemeContext } from '../Context/ThemeContext';
import Title from '../Component/Title/Title';
import FeatureProduct from '../Component/FeatureProduct/FeatureProduct';
import BastSale from '../Component/BestSale/BastSale';
import WinterProduct from '../Component/WinterProduct/WinterProduct';
import TrendingProduct from '../Component/TrendingProduct/TrendingProduct';
import Testimonial from './../Component/Testimonial/Testimonial';
import Footer from '../Component/Footer/Footer';

function Home() {
  const { bgHeaderBottom, textColor, bgHeaderTop, heroBg } = useThemeContext();
  const HeaderLocalBottom = JSON.parse(localStorage.getItem('bgHeaderBottom'));

  return (
    <div style={ HeaderLocalBottom ? HeaderLocalBottom : bgHeaderBottom}> 
        <Navbar/>
        <Hero bgHeaderTop={bgHeaderTop} textColor={textColor} heroBg={heroBg} />
        <Title textColor={textColor} />
        <Category textColor={textColor} />
        <FeatureProduct textColor={textColor} />
        <BastSale textColor={textColor} />
        <WinterProduct textColor={textColor} />
        <TrendingProduct textColor={textColor}/>
        <Testimonial textColor={textColor}  /> 
        <Footer/> 
    </div>
  )
}

export default Home;