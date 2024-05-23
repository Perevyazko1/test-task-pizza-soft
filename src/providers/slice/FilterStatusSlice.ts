import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EmploeesType} from "../models/EmploeesType";


export interface FilterStatusState {
    filterStatus:boolean
}


const initialState: FilterStatusState = {
    filterStatus: false

}

export const filterStatusAppSlice = createSlice({
    name: 'filterStatusApp',
    initialState,
    reducers: {
        filterStatusApp(state, action: PayloadAction<boolean>) {
            state.filterStatus = action.payload
        },
    }
})

export default filterStatusAppSlice.reducer;