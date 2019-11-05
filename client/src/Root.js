import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // HTML5 history API 
import App from './components/App';

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Root;