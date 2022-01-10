import { createSlice } from "@reduxjs/toolkit";

export const ListProducts = createSlice({
    name: "ListProducts",
    initialState: {
        products: [
            {
                title: 'S6 galaxy lite',
                id: 1,
                stock: true,
                price: 455,
                rating: 4.5,
                img_url: 'HeadsetImage.png',
                slug: 's6-galaxy-lite'
            },
            {
                title: 'PS 5 Lite',
                id: 2,
                stock: false,
                price: 499,
                rating: 4.7,
                img_url: 'image22.png',
                slug: 'ps-5-lite'
            },
            {
                title: 'Smarth Watch',
                id: 3,
                stock: true,
                price: 249,
                rating: 3.5,
                img_url: 'image22.png',
                slug: 'smarth-watch'
            },
            {
                title: 'Note Book i7',
                id: 4,
                stock: true,
                price: 1249,
                rating: 4.9,
                img_url: 'HeadsetImage.png',
                slug: 'note-book-i7'
            },
        ],
    },
    reducers: {
        addProduct: (state, action ) => {

        }
    }
})

export const { addProduct } = ListProducts.actions

export default ListProducts.reducer;