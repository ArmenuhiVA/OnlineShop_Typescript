import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TProduct } from '../types'
// import type { RootState } from '../../app/store'


interface ProductState {
    allProducts: TProduct[];
    filteredProducts: TProduct[];
}

const initialState: ProductState = {
    allProducts: [],
    filteredProducts: [],
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setAllProducts: (state, action: PayloadAction<TProduct[]>) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },
        setProducts: (state, action: PayloadAction<TProduct[]>) => {
            state.filteredProducts = action.payload;
        },
    },
})

export const { setAllProducts, setProducts} = productSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default productSlice.reducer