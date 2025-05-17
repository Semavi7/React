import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appslice'
import productReducer from '../redux/slices/productSlice';
import basketReducer from '../redux/slices/basketSlice';

export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})