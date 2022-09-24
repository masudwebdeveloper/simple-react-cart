import Product from "../Product/Product";

const addLocalDb = (id) => {
   let shoppingCart = {};
   const storeCart = localStorage.getItem('shopping-cart');
   if (storeCart) {
      shoppingCart = JSON.parse(storeCart);
   }

   const quantity = shoppingCart[id];
   if (quantity) {
      const newQuantity = +quantity + 1;
      shoppingCart[id] = newQuantity;
      // localStorage.setItem(id, newQuantity);
   } else {
      shoppingCart[id] = 1;
      // localStorage.setItem(id, 1)
   }
   localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFormCart = (id) => {
   const storeCart = localStorage.getItem('shopping-cart');
   if (storeCart) {
      const shoppingCart = JSON.parse(storeCart);
      if (id in shoppingCart) {
         delete shoppingCart[id];
         localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
      }
   }
}

// const products = [
//    { id: 1, name: 'alta', price: 100 },
//    { id: 2, name: 'palis', price: 200 },
//    { id: 3, name: 'balis', price: 300 },
//    { id: 4, name: 'nalis', price: 400 },
//    { id: 5, name: 'kalis', price: 500 }
// ]
// const total = (previous, current) => previous + current.price;
// const result = products.reduce(total, 0);
// console.log(result);

const getSubTotal = (Products) => {
   const getTotal = (previous, currents) => previous + currents.price;
   const result = Products.reduce(getTotal, 0);
   return result;
}


export { addLocalDb, removeFormCart, getSubTotal };