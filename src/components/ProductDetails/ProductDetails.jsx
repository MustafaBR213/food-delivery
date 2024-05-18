import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets'; // Assuming you have the assets imported similarly
import SecondNav from '../Navbar/SecondNav';

const ProductDetails = () => {
  const { id } = useParams();
  const { food_list, addToCart, removeFromCart, cartItems } = useContext(StoreContext);

  const product = food_list.find(item => item._id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = (event) => {
    event.stopPropagation();
    addToCart(id);
  };

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    removeFromCart(id);
  };

  return (
    <>
    <SecondNav/>
    <div className="product-detail">
      
      <img src={product.image} alt={product.name} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p>{product.description}{product.description}{product.description}{product.description}</p>
        <h1 className="food-item-price">${product.price}</h1>
        <div className="product-detail-cart-actions">
          {!cartItems[id] ? (
            <img className='add' onClick={handleAddToCart} src={assets.add_icon_white} alt='' />
          ) : (
            <div className="product-detail-counter">
              <img onClick={handleRemoveFromCart} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={handleAddToCart} src={assets.add_icon_green} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
    </>
    
  );
};

export default ProductDetails;
