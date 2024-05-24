import {ChangeEvent, memo, ReactNode} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {VALUE_SELECT} from "../../entities/Roles";
import useAxios from "../../shared/hooks/useAxios/useAxios";
import {EmploeesType} from "../../providers/models/EmploeesType";
import {tableAppSlice} from "../../providers/slice/TableSlice";
import {useAppdispatch, useAppSelector} from "../../shared/hooks/useRedux/redux";
import {filterRoleAppSlice} from "../../providers/slice/FilterRoleSlice";

interface FilterRoleProps {
    className?: string
    children?: ReactNode
    header?: string
    valueSelect: object
    value: string
    // onChange: (event: ChangeEvent<{ value: unknown }>) => void;
    onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void



}


export const FilterRole = memo((props: FilterRoleProps) => {



    const {
        className,
        children,
        valueSelect,
        header,
        onChange,
        value,
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
            <InputLabel id="demo-select-small-label">{header}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={value}
                onChange={onChange}
            >
                {Object.entries(valueSelect).map(([name, role], index) => (
                    <MenuItem key={index} value={name}>{role}</MenuItem>


                ))}

            </Select>

        </FormControl>

    );
});