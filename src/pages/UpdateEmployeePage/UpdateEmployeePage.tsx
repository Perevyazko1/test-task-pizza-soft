import {memo, ReactNode, useEffect, useState} from 'react';
import CustomTable from "../../shared/ui/CustomTable/CustomTable";
import Paper from "@mui/material/Paper";
import {CustomForm} from "../../shared/ui/CustomForm/CustomForm";
import cls from "./UpdateEmployeePage.module.scss"
import useAxios from "../../shared/hooks/useAxios/useAxios";
import {useNavigate, useParams} from "react-router-dom";
import {EmploeesType} from "../../providers/models/EmploeesType";
import {tableAppSlice} from "../../providers/slice/TableSlice";
import {useAppdispatch, useAppSelector} from "../../shared/hooks/useRedux/redux";
import {employeeAppSlice} from "../../providers/slice/EmployeeSlice";

interface UpdateEmployeePageProps {
    className?: string
    children?: ReactNode
}


export const UpdateEmployeePage = memo((props: UpdateEmployeePageProps) => {
    const {id} = useParams();
    const {data, error, loading, executeRequest} = useAxios<EmploeesType>();
    const {employee} = employeeAppSlice.actions
    const {ressetEmployee} = employeeAppSlice.actions


    const dispatch = useAppdispatch()


    const fetchData = async () => {
        try {
            if(id){
                await executeRequest('GET', `http://localhost:3001/employees/${id}`);

            }



        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, []);
    useEffect(() => {
        dispatch(ressetEmployee())
        if (data) {
            dispatch(employee(data))

        }
    }, [loading]);


    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <Paper className={cls.UpdateEmployeePage}>
            <CustomForm/>
        </Paper>
    );
});