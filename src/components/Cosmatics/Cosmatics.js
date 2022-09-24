import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { multiply } from '../utilities/Utilities';

const Cosmatics = () => {
   const first = 5;
   const second = 5;
   const total = multiply(first, second);
   const [cosmatics, setCosmatics] = useState([]);
   useEffect(() => {
      fetch('https://cosmatic.free.beeceptor.com/')
         .then(res => res.json())
         .then(data => setCosmatics(data))
   }, [])

   return (
      <div>
         <h1>Welcome to our Cosmatics Store</h1>
         <p>Multiplication: {total}</p>
      </div>
   );
};

export default Cosmatics;