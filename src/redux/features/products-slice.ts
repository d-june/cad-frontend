import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ProductType } from '@/app/types/types'

const initialState = {
    products: [] as ProductType[]
} 

export const products = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setProducts (state, action: PayloadAction<ProductType[]>)  {
            state.products = action.payload
        }  
    },
})

export const {setProducts} = products.actions
export default products.reducer