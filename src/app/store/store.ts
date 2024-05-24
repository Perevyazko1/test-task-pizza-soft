import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tableAppSlice from "../../providers/slice/TableSlice";
import filterStatusAppSlice from "../../providers/slice/FilterStatusSlice";
import filterRoleAppSlice from "../../providers/slice/FilterRoleSlice";
import employeeAppSlice from "../../providers/slice/EmployeeSlice";

const rootReducer = combineReducers({

    tableAppSlice,
    filterStatusAppSlice,
    filterRoleAppSlice,
    employeeAppSlice

})

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore["dispatch"]
