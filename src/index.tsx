import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import {setupStore} from "./app/store/store";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore()

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
