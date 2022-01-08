import { configureStore } from '@reduxjs/toolkit'

import AddToCar from './Reducers/AddToCar/AddToCar';

export const store = configureStore({
    reducer: {
        addToCar: AddToCar
    },
});