import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tableAppSlice from "../../providers/slice/TableSlice";
import filterStatusAppSlice from "../../providers/slice/FilterStatusSlice";
import filterRoleAppSlice from "../../providers/slice/FilterRoleSlice";

const rootReducer = combineReducers({

    tableAppSlice,
    filterStatusAppSlice,
    filterRoleAppSlice

})

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer,
    })
}
export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore["dispatch"]
