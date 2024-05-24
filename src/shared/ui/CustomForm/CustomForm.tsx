import {memo, ReactNode} from 'react';
import {Button, Checkbox, FormControlLabel, SelectChangeEvent, TextField} from "@mui/material";
import {FilterRole} from "../../../features/FilterRole/FilterRole";
import {FilterStatus} from "../../../features/FilterStatus/FilterStatus";
import {useAppdispatch, useAppSelector} from "../../hooks/useRedux/redux";
import {employeeAppSlice} from "../../../providers/slice/EmployeeSlice";
import {VALUE_ROLE} from "../../../entities/Roles";
import cls from "./CustomForm.module.scss"
import useAxios from "../../hooks/useAxios/useAxios";
import {EmploeesType} from "../../../providers/models/EmploeesType";
import {useNavigate} from "react-router-dom";

interface CustomFormProps {
    className?: string
    children?: ReactNode
}


export const CustomForm = memo((props: CustomFormProps) => {
    const {employee} = useAppSelector(state => state.employeeAppSlice)
    const {employeeIsArchive} = employeeAppSlice.actions
    const {employeeRole} = employeeAppSlice.actions
    const {employeePhone} = employeeAppSlice.actions
    const {employeeBirthday} = employeeAppSlice.actions
    const {employeeName} = employeeAppSlice.actions


    const dispatch = useAppdispatch()
        const navigate = useNavigate()

    const {data, error, loading, executeRequest} = useAxios<EmploeesType>();


    const fetchData = async () => {
        try {
            if (employee.id){
                await executeRequest('PUT', `http://localhost:3001/employees/${employee.id}`,employee);
            }else {
                const { id, ...creatEmployee} = employee
                await executeRequest('POST', `http://localhost:3001/employees/${employee.id}`,employee);
            }


            navigate("/")





        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };


    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div className={cls.CustomForm}>
            <TextField
                sx={{
                    '& .MuiTextField-root': {m: 1,},
                    margin: "50px auto 50px auto"
                }}
                fullWidth
                value={employee.name}
                size="medium"
                id="outlined"
                label="Имя"
                onChange={(e) =>
                    dispatch(employeeName(e.target.value))}
            />
            <TextField
                sx={{
                    '& .MuiTextField-root': {m: 1,},
                    margin: "50px auto 50px auto"
                }}
                fullWidth
                value={employee.phone}
                size="medium"
                label="Телефон"
                id="outlined"
                onChange={(e) =>
                    dispatch(employeePhone(e.target.value))}
            />
            <TextField
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                    margin: "50px auto 50px auto"
                }}
                fullWidth
                value={employee.birthday}
                size="medium"
                label="Дата рождения"
                id="outlined"
                onChange={(e) =>
                    dispatch(employeeBirthday(e.target.value))}
            />
            <FilterRole
                value={employee.role}
                onChange={(e: SelectChangeEvent) =>
                    dispatch(employeeRole(e.target.value))}
                valueSelect={VALUE_ROLE}

            />
            <FormControlLabel sx={{width: '150px', margin: '10px'}} control={<Checkbox size="medium"
                                                                                       checked={employee.isArchive}
                                                                                       onChange={(e) => {
                                                                                           dispatch(employeeIsArchive(e.target.checked))
                                                                                       }}
                                                                                       inputProps={{'aria-label': 'controlled'}}/>}
                              label="В архиве"
            />

            <Button
                sx={{width: '200px', margin: "50px auto 50px auto"}}
                variant="outlined"
                size="medium"
                onClick={fetchData}
            >
                СОХРАНИТЬ
            </Button>


        </div>
    );
});