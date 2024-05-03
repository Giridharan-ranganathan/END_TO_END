import { configureStore } from '@reduxjs/toolkit';
import cart from './Reducer/cart';
import Products from "./Reducer/product";

export default configureStore({
  reducer:{
    cart : cart,
    Products : Products,
  },
})