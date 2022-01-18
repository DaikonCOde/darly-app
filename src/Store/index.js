import { configureStore } from '@reduxjs/toolkit'

import AddToCart from './Reducers/AddToCart/AddToCart';
import ListProducts from './Reducers/ListProducts/ListProducts';
import Users from './Reducers/Users/Users';

export const store = configureStore({
    reducer: {
        addToCart: AddToCart,
        listProducts: ListProducts,
        users: Users,
    },
});