import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {EmploeesType} from "../models/EmploeesType";


export interface EmploeesState {
    employee: EmploeesType
}


const initialState: EmploeesState = {
    employee: {
        "id": '',
        "name": '',
        "isArchive": false,
        "role": '',
        "phone": '',
        "birthday": ''

    }

}

export const employeeAppSlice = createSlice({
    name: 'employeeApp',
    initialState,
    reducers: {
        employee(state, action: PayloadAction<EmploeesType>) {
            state.employee = action.payload
        },
        ressetEmployee(state ) {
            state.employee = initialState.employee
        },
        employeeName(state, action: PayloadAction<string>) {
            state.employee.name = action.payload
        },
        employeeIsArchive(state, action: PayloadAction<boolean>) {
            state.employee.isArchive = action.payload
        },
        employeeRole(state, action: PayloadAction<string>) {
            state.employee.role = action.payload
        },
        employeePhone(state, action: PayloadAction<string>) {
            state.employee.phone = action.payload
        },
        employeeBirthday(state, action: PayloadAction<string>) {
            state.employee.birthday = action.payload
        },
    }
})

export default employeeAppSlice.reducer;