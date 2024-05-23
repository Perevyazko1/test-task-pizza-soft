import {memo, ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {VALUE_SELECT} from "../../entities/Roles";
import useAxios from "../../shared/hooks/useAxios/useAxios";
import {EmploeesType} from "../../providers/models/EmploeesType";
import {tableAppSlice} from "../../providers/slice/TableSlice";
import {useAppdispatch, useAppSelector} from "../../shared/hooks/useRedux/redux";
import {filterRoleAppSlice} from "../../providers/slice/FilterRoleSlice";

interface FilterRoleProps {
    className?: string
    children?: ReactNode

}


export const FilterRole = memo((props: FilterRoleProps) => {

    const {filterRoleApp} = filterRoleAppSlice.actions
    const {filterRole} = useAppSelector(state => state.filterRoleAppSlice)
    const dispatch = useAppdispatch()


    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <FormControl
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
                margin: "50px auto 50px auto",
            }}
            fullWidth
            size="medium">
            <InputLabel id="demo-select-small-label">Фильтр по должности</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={filterRole}
                label="Определить стоимость"
                onChange={(e) =>
                    dispatch(filterRoleApp(e.target.value))}
            >
                {Object.entries(VALUE_SELECT).map(([name, role], index) => (
                    <MenuItem key={index} value={name}>{role}</MenuItem>


                ))}

            </Select>

        </FormControl>

    );
});