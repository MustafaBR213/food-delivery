import React, { useState } from 'react'
import './Products.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import SearchBar from '../../components/SearchBar/SearchBar'
const Products = () => {
    const [category,setCategory]= useState("All")
  return (
    <div>
      <SearchBar/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Products