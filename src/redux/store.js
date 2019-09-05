import { createStore, aapplyMiddleware, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//middleawre is in between actions and root reducers, it will get actions and console log them and pass them to reducer

import rootReducer from './root-reducer';

//middleware that the store is representing from redux is an array

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)) //in applyMiddleware,we have spread the middlewares, ...middlewares will spread all the values of middlewares array as individual values inside applyMiddleware

export default store;