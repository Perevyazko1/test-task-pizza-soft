import {employeeAppSlice} from "../../../providers/slice/EmployeeSlice";
import {useAppdispatch} from "../useRedux/redux";


const useMaskPhone = () => {
    const {employeePhone} = employeeAppSlice.actions
    const dispatch = useAppdispatch()
    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {


        let formattedPhoneNumber = e.target.value;

        // Удаляем все символы, кроме цифр
        formattedPhoneNumber = formattedPhoneNumber.replace(/\D/g, '');

        // Применяем маску к номеру телефона
        if (formattedPhoneNumber.length <= 1) {
            if (formattedPhoneNumber === "7" || "8") {
                formattedPhoneNumber = `+7 (${formattedPhoneNumber.slice(1, 4)}`
            } else {
                formattedPhoneNumber = `+7 (${formattedPhoneNumber}`;
            }
        } else if (formattedPhoneNumber.length <= 4) {
            formattedPhoneNumber = `+7 (${formattedPhoneNumber.slice(1, 4)}`;
        } else if (formattedPhoneNumber.length <= 7) {
            formattedPhoneNumber = `+7 (${formattedPhoneNumber.slice(1, 4)}) ${formattedPhoneNumber.slice(4, 7)}`;
        } else if (formattedPhoneNumber.length <= 9) {
            formattedPhoneNumber = `+7 (${formattedPhoneNumber.slice(1, 4)}) ${formattedPhoneNumber.slice(4, 7)}-${formattedPhoneNumber.slice(7, 9)}`;
        } else {
            formattedPhoneNumber = `+7 (${formattedPhoneNumber.slice(1, 4)}) ${formattedPhoneNumber.slice(4, 7)}-${formattedPhoneNumber.slice(7, 9)}-${formattedPhoneNumber.slice(9, 11)}`;
        }
        dispatch(employeePhone(formattedPhoneNumber))

    };
    return handlePhoneNumberChange

}

export default useMaskPhone