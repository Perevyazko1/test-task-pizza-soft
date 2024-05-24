import * as React from 'react';
import {memo, useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAxios from "../../hooks/useAxios/useAxios";
import {EmploeesType} from "../../../providers/models/EmploeesType";
import {useAppdispatch, useAppSelector} from "../../hooks/useRedux/redux";
import {tableAppSlice} from "../../../providers/slice/TableSlice";
import cls from "./CustomTable.module.scss"
import up from "../../assets/icons/vector_close.svg"
import {VALUE_SELECT} from "../../../entities/Roles";
import {useNavigate} from "react-router-dom";


const CustomTable = memo(() => {

    const {data, error, loading, executeRequest} = useAxios<EmploeesType[]>();
    const {tableApp} = tableAppSlice.actions
    const {sortByNameAsc} = tableAppSlice.actions
    const {sortByNameDesc} = tableAppSlice.actions
    const {sortByBirthdayAsc} = tableAppSlice.actions
    const {sortByBirthdayDesc} = tableAppSlice.actions
    const {tableData} = useAppSelector(state => state.tableAppSlice)
    const [sortName, setSortName] = useState<boolean>(true)
    const [sortBirthday, setSortBirthday] = useState<boolean>(true)
    const {filterRole} = useAppSelector(state => state.filterRoleAppSlice)
    const {filterStatus} = useAppSelector(state => state.filterStatusAppSlice)


    const dispatch = useAppdispatch()
    const navigate = useNavigate()


    const fetchData = async () => {
        try {

            await executeRequest('GET', 'http://localhost:3001/employees/');


        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            dispatch(tableApp(data))
        }
    }, [loading]);

    const handleSortName = () => {

        if (sortName) {
            dispatch(sortByNameAsc())
        } else {
            dispatch(sortByNameDesc())
        }
        setSortName(!sortName);

    }
    const handleSortBirthday = () => {

        if (sortBirthday) {
            dispatch(sortByBirthdayAsc())
        } else {
            dispatch(sortByBirthdayDesc())
        }
        setSortBirthday(!sortBirthday);

    }


    return (
        <div style={{display: "grid", justifyContent: "center"}}>
            <TableContainer component={Paper}>
                {!loading && tableData &&
                    <Table sx={{width: "100vw"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={cls.name} onClick={handleSortName}>
                                    Имя
                                    <img src={up}
                                         className={sortName ? `${cls.selectName} ${cls.openSelect}` : `${cls.selectName} ${cls.closeSelect}`}/>
                                </TableCell>
                                <TableCell>Должность</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell className={cls.birthday} onClick={handleSortBirthday}>
                                    Дата рождения
                                    <img src={up}
                                         className={sortBirthday ? `${cls.selectBirth} ${cls.openSelect}` : `${cls.selectBirth} ${cls.closeSelect}`}/>

                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData && tableData.filter((item: EmploeesType) => item.isArchive === filterStatus && (filterRole === "all" || item.role === filterRole)).map((row: EmploeesType) => (
                                <TableRow
                                    onClick={() => {
                                        navigate(`/update/${row.id}`)
                                    }}
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell>{VALUE_SELECT[`${row.role}`]}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.birthday}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                }
            </TableContainer>
        </div>
    );
});
export default CustomTable