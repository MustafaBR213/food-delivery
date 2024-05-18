import React, { useState } from 'react'
import './Products.css'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Products = () => {
    const [category,setCategory]= useState("All")
  return (
    <div>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
    </div>
  )
}

export default Products