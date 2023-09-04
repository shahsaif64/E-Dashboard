import {configureStore} from '@reduxjs/toolkit'
import productReducer from './slices/product/index'

export const store= configureStore({
    reducer: {
       product:productReducer,
    }
})