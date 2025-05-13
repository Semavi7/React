import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/counterSlice'
import userReducer from '../redux/useSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer
    },
})