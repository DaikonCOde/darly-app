/*eslint no-unused-expressions: "error"*/
import { createSlice } from "@reduxjs/toolkit";

export const AddToCar = createSlice({
    name: "AddToCar",
    initialState: {
        productsAdded: [],
    },
    reducers: {
        addProduct: (state, action) => {

            state.productsAdded.push({...action.payload, count: 1});

        },  
        removeProduct: (state, action) => {
            
        },
        incrementCountProduct: (state, action) => {

            const idProduct = action.payload

            const productIndex = state.productsAdded.findIndex( (product) => product.id === idProduct );

            // eslint-disable-next-line no-unused-expressions
            state.productsAdded[productIndex].count += 1

            console.log(productIndex)

        },
        decrementCountProduct: ( state, action ) => {
            const idProduct = action.payload

            const productIndex = state.productsAdded.findIndex( (product) => product.id === idProduct );

            // eslint-disable-next-line no-unused-expressions
            if ( state.productsAdded[productIndex].count > 1 ) {
                state.productsAdded[productIndex].count -= 1
            }

        },
    },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, incrementCountProduct } = AddToCar.actions

export default AddToCar.reducer
