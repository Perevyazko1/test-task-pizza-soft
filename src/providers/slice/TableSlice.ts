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
        sortByNameAsc(state) {
            state.tableData = state.tableData.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByNameDesc(state) {
            state.tableData = state.tableData.sort((a, b) => b.name.localeCompare(a.name));
        }

    }
})

export default tableAppSlice.reducer;