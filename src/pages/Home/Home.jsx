import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import ImageSlider from '../../components/ImageSlider/ImageSlider'
import images from "../../data/imagess";
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {

    const [category,setCategory]= useState("All")

  return (
    <div className='Home'>
        
        
          <SearchBar/>
          
        <div className='placee-order'>
          <div className='placee-order-left'>
          <ImageSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </ImageSlider>
          </div>
          <div className='placee-order-right'>
          <Header/>
          </div>
        </div>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/>
    </div>
  )
}

export default Home