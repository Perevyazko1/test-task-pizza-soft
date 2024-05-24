import {memo, ReactNode, useEffect} from 'react';
import useAxios from "../../shared/hooks/useAxios/useAxios";
import CustomTable from "../../shared/ui/CustomTable/CustomTable";
import Paper from "@mui/material/Paper";
import cls from "./MainPage.module.scss"
import {FilterRole} from "../../features/FilterRole/FilterRole";
import {FilterStatus} from "../../features/FilterStatus/FilterStatus";
import {SelectChangeEvent} from "@mui/material";
import {VALUE_ROLE, VALUE_SELECT} from "../../entities/Roles";
import {filterRoleAppSlice} from "../../providers/slice/FilterRoleSlice";
import {useAppdispatch, useAppSelector} from "../../shared/hooks/useRedux/redux";

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
    const {filterRoleApp} = filterRoleAppSlice.actions
    const {filterRole} = useAppSelector(state => state.filterRoleAppSlice)
    const dispatch = useAppdispatch()

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
                <FilterRole
                    value={filterRole}
                    onChange={(e: SelectChangeEvent) =>
                        dispatch(filterRoleApp(e.target.value))}
                    valueSelect={VALUE_SELECT}

                />
                <FilterStatus/>
            </div>
            <CustomTable/>
        </Paper>
    );
});