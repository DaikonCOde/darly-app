import { configureStore } from '@reduxjs/toolkit'

import AddToCart from './Reducers/AddToCart/AddToCart';
import ListProducts from './Reducers/ListProducts/ListProducts';

export const store = configureStore({
    reducer: {
        addToCart: AddToCart,
        listProducts: ListProducts,
    },
});