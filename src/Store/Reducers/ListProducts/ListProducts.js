import { createSlice } from "@reduxjs/toolkit";

export const ListProducts = createSlice({
    name: "ListProducts",
    initialState: {
        products: [],
    },
    reducers: {
        updateListProducts: (state, action ) => {
            state.products = action.payload
        }
    }
})

export const { updateListProducts } = ListProducts.actions

export default ListProducts.reducer;