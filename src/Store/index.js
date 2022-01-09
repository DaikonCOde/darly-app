import { configureStore } from '@reduxjs/toolkit'

import AddToCart from './Reducers/AddToCart/AddToCart';

export const store = configureStore({
    reducer: {
        addToCart: AddToCart
    },
});