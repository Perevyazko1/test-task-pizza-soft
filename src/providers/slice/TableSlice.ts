import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EmploeesType} from "../models/EmploeesType";


export interface EmploeesState {
    tableData:EmploeesType[]
}


const initialState: EmploeesState = {
    tableData: []

}

export const tableAppSlice = createSlice({
    name: 'tableApp',
    initialState,
    reducers: {
        tableApp(state, action: PayloadAction<EmploeesType[]>) {
            state.tableData = action.payload
        },


    }
})

export default tableAppSlice.reducer;