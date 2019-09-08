import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // it will provide us redux store and we need to wrap it up in our app
import { PersistGate } from 'redux-persist/integration/react';//importing persist for react

import './index.css';
import App from './App';

import {store, persistor} from './redux/store'; //persitor being the persisted version of our store

ReactDOM.render(
    <Provider store={store}> {/*It gives us the redux store in which we will store the state, it has to be the parent of app, Once we give the store object then it is given to the app so we can dispatch actions to that store or we can pull values from the store into our components */}
        <BrowserRouter> {/*<BrowserRouter> gives <App> all the functionality of routing which this librar provides */}
            <PersistGate persistor={persistor}> {/*it will allow app to store the data in local storage, it will fire the actiona to rehydrate the state whenever the app is refreshed */}
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
