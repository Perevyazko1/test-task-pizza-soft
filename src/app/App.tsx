import React from 'react';
import {MainPage} from "../pages/MainPage/MainPage";
import {createTheme, ThemeProvider} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {UpdateEmployeePage} from "../pages/UpdateEmployeePage/UpdateEmployeePage";


function App() {
    const darkTheme = createTheme({
        typography: {
            fontFamily: 'Raleway, Arial',
            fontSize: 15
        },
        palette: {
            mode: "dark",
        },
    });


    return (
        <ThemeProvider theme={darkTheme}>


            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/update/:id"} element={<UpdateEmployeePage/>}/>
                <Route path={"/create"} element={<MainPage/>}/>
            </Routes>


        </ThemeProvider>
    );
}

export default App;
