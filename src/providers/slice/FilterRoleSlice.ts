import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EmploeesType} from "../models/EmploeesType";


export interface FilterRoleState {
    filterRole:string
}


const initialState: FilterRoleState = {
    filterRole: "all"

}

export const filterRoleAppSlice = createSlice({
    name: 'filterRoleApp',
    initialState,
    reducers: {
        filterRoleApp(state, action: PayloadAction<string>) {
            state.filterRole = action.payload
        },
    }
})

export default filterRoleAppSlice.reducer;