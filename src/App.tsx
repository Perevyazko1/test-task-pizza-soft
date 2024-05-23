import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MainPage} from "./pages/MainPage";
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
