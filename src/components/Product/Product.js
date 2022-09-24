import React from 'react';
import { addLocalDb, removeFormCart } from '../utilities/fakedb';
import './Product.css';

const Product = (props) => {
   const addToCart = (id) => {
      addLocalDb(id);
   }
   const removeToCart = (id) => {
      removeFormCart(id);
   }
   return (
      <div className='product-container'>
         <h2>Name: {props.product.name}</h2>
         <img alt='json pictur' src={props.product.picture}></img>
         <p>Price: ${props.product.price}</p>
         <button className='buy-btn' onClick={()=> addToCart(props.product._id)}>Buy Now</button>
         <button className='buy-btn' onClick={()=> removeToCart(props.product._id)}>Remove</button>
      </div>
   );
};

export default Product;