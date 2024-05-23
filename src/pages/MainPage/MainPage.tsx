import {memo, ReactNode, useEffect} from 'react';
import useAxios from "../../shared/hooks/useAxios/useAxios";
import CustomTable from "../../shared/ui/CustomTable/CustomTable";
import Paper from "@mui/material/Paper";
import cls from "./MainPage.module.scss"
import {FilterRole} from "../../features/FilterRole/FilterRole";
import {FilterStatus} from "../../features/FilterStatus/FilterStatus";

interface MainPageProps {
    className?: string
    children?: ReactNode
}

interface Employee {
    "id": string,
    "name": string,
    "isArchive": boolean,
    "role": string,
    "phone": string,
    "birthday": string
}


export const MainPage = memo((props: MainPageProps) => {
    const {data, error, loading, executeRequest} = useAxios<Employee[]>();

    const {
        className,
        children,
        ...otherProps
    } = props

    const fetchData = async () => {
        try {

            await executeRequest('GET', 'http://localhost:3001/employees');


        } catch (error) {
            console.error('Ошибка получения данных:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, []);

    useEffect(() => {
        console.log(error)
        console.log(loading)
    }, []);


    return (
        <Paper className={cls.MainPage}>
            <div className={cls.filters}>
                <FilterRole/>
                <FilterStatus/>
            </div>
            <CustomTable/>
        </Paper>
    );
});