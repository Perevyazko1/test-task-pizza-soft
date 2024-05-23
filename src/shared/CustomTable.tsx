import * as React from 'react';
import {memo, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {LoadingButton} from "@mui/lab";
import useAxios from "./hooks/useAxios";

interface Emploees {
    "id": string,
    "name": string,
    "isArchive": boolean,
    "role": string,
    "phone": string,
    "birthday": string
}


const CustomTable = memo(() => {

    const {data, error, loading, executeRequest} = useAxios<Emploees[]>();
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


    return (
        <div style={{display: "grid", justifyContent: "center"}}>
            <TableContainer component={Paper}>
                {!loading && data &&
                    <Table sx={{width: "100vw"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Имя</TableCell>
                                <TableCell>Роль</TableCell>
                                <TableCell>Телефон</TableCell>
                                <TableCell>Дата рождения</TableCell>
                                <TableCell>Статус</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && Object.values(data).map((row: Emploees) => (
                                <TableRow
                                    key={row.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">{row.name}</TableCell>
                                    <TableCell>{row.role}</TableCell>
                                    <TableCell>{row.phone}</TableCell>
                                    <TableCell>{row.birthday}</TableCell>
                                    <TableCell>{row.isArchive}</TableCell>
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