import React from 'react'
import './SearchBar.css'
const SearchBar = () => {
  return (
    <div className="input-group rounded">
      
        <input type="search" className="form-control rounded" placeholder="البحث" aria-label="Search" aria-describedby="search-addon" />
        
    </div>
  )
}

export default SearchBar