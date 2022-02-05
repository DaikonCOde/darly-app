import { createSlice } from "@reduxjs/toolkit";

export const ListStatusProducts = createSlice({
    name: "ListStatusProducts",
    initialState: {
        productsByStatus: [],
    },
    reducers: {
        updateListStatusProducts: (state, action ) => {
            state.productsByStatus = action.payload
        }
    }
})

export const { updateListStatusProducts } = ListStatusProducts.actions

export default ListStatusProducts.reducer;