import { SliderInfo } from '@/app/types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'


const initialState = {
    sliderInfo: [] as SliderInfo[]
} 

export const slider = createSlice({
    name: 'slider',
    initialState: initialState,
    reducers: {
        setSliderInfo (state, action: PayloadAction<SliderInfo[]>)  {
            state.sliderInfo = action.payload
        }  
    },
})

export const {setSliderInfo} = slider.actions
export default slider.reducer