import React from 'react';
import {MainPage} from "../pages/MainPage/MainPage";
import {createTheme, ThemeProvider} from "@mui/material";


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

            <MainPage/>

        </ThemeProvider>
    );
}

export default App;
