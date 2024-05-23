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
        },
        sortByBirthdayAsc(state) {
            state.tableData = state.tableData.sort((a, b) => a.birthday.split('.').reverse().join('-').localeCompare(b.birthday.split('.').reverse().join('-')));
        },

        sortByBirthdayDesc(state) {
            state.tableData = state.tableData.sort((a, b) => b.birthday.split('.').reverse().join('-').localeCompare(a.birthday.split('.').reverse().join('-')));
        }

    }
})

export default tableAppSlice.reducer;