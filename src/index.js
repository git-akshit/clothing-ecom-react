import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter> {/*<BrowserRouter> gives <App> all the functionality of routing which this librar provides */}
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);
