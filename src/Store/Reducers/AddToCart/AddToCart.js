/*eslint no-unused-expressions: "error"*/
import { createSlice } from "@reduxjs/toolkit";

const productsAdded = localStorage.getItem('ListProductsAdded') 
                        ? JSON.parse(localStorage.getItem('ListProductsAdded')) 
                        : [];

export const AddToCart = createSlice({
    name: "AddToCart",
    initialState: {
        productsAdded,
        totalCount: 0,
    },
    reducers: {
        addProduct: (state, action) => {

            state.productsAdded.push({...action.payload, count: 1});


        },
        removeProduct: (state, action) => {

            const idProduct = action.payload

            const productIndex = state.productsAdded.findIndex( (product) => product.id === idProduct );

            state.productsAdded.splice(productIndex, 1);
            
        },
        incrementCountProduct: (state, action) => {

            const idProduct = action.payload

            const productIndex = state.productsAdded.findIndex( (product) => product.id === idProduct );

            state.productsAdded[productIndex].count += 1

        },
        decrementCountProduct: ( state, action ) => {
            const idProduct = action.payload

            const productIndex = state.productsAdded.findIndex( (product) => product.id === idProduct );

            if ( state.productsAdded[productIndex].count > 1 ) {
                state.productsAdded[productIndex].count -= 1
            }

        },

        updateTotalCount: ( state ) => {

            const listTotalCount =  state.productsAdded.length === 0 ? [ 0 ] : state.productsAdded.map( (product) => product.price * product.count )

            state.totalCount = listTotalCount.reduce((prev, current) => prev + current )
        },
    },
});

// Action creators are generated for each case reducer function
export const { 
    addProduct,
    removeProduct, 
    incrementCountProduct, 
    decrementCountProduct, 
    updateTotalCount
    } = AddToCart.actions
    

export default AddToCart.reducer
