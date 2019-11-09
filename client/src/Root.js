import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // HTML5 history API 
import App from './components/App';
import store from './store'
import { Provider } from 'react-redux'
const Root = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
};

export default Root;