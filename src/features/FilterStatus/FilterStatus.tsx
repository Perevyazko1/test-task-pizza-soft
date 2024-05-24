import {memo, ReactNode} from 'react';
import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import {filterRoleAppSlice} from "../../providers/slice/FilterRoleSlice";
import {useAppdispatch, useAppSelector} from "../../shared/hooks/useRedux/redux";
import {filterStatusAppSlice} from "../../providers/slice/FilterStatusSlice";

interface FilterStatusProps {
    className?: string
    children?: ReactNode
}


export const FilterStatus = memo((props: FilterStatusProps) => {

    const {filterStatusApp} = filterStatusAppSlice.actions
    const {filterStatus} = useAppSelector(state => state.filterStatusAppSlice)
    const dispatch = useAppdispatch()

    const {
        className,
        children,
        ...otherProps
    } = props


    return (
            <FormControlLabel sx={{width:'150px',margin:'10px'}} control={<Checkbox size="medium"
                                                 checked={filterStatus}
                                                 onChange={(e) => {
                                                     dispatch(filterStatusApp(e.target.checked))
                                                 }}
                                                 inputProps={{'aria-label': 'controlled'}}/>} label="В архиве"/>
    );
});