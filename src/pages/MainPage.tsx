import {memo, ReactNode, useEffect} from 'react';
import useAxios from "../shared/hooks/useAxios/useAxios";
import CustomTable from "../shared/CustomTable";

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
        <div>
            <CustomTable/>
        </div>
    );
});