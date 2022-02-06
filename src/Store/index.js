import { configureStore } from "@reduxjs/toolkit";

import AddToCart from "./Reducers/AddToCart/AddToCart";
import ListProducts from "./Reducers/ListProducts/ListProducts";
import Users from "./Reducers/Users/Users";
import ListStatusProducts from "./Reducers/ListStatusProducts/ListStatusProducts";
import Categories from "./Reducers/Categories/Categories";

export const store = configureStore({
  reducer: {
    addToCart: AddToCart,
    categories: Categories,
    listProducts: ListProducts,
    listStatusProducts: ListStatusProducts,
    users: Users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
