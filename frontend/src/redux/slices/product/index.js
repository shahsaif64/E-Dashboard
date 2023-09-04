import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'product',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        
    }
})

export const { increment } = productSlice.actions

export default productSlice.reducer