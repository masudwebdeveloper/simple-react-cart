import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { getSubTotal } from '../utilities/fakedb';
import './Products.css';

const Products = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      fetch('data.json')
         .then(res => res.json())
         .then(data => setProducts(data));
   }, []);
   const total = getSubTotal(products);
   return (
      <div>
         <p>sub total : {total}</p>
         <h1>Data storage integrate Module 47.5</h1>
         <h1>Welcome to Products Store</h1>
         <div className="products-container">
            {
               products.map(product => <Product product={product} key={product._id}></Product>)
            }
         </div>
      </div>
   );
};

export default Products;