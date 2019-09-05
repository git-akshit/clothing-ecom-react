//root reducer is the base state of all the states in our application, it combines all our states together, all the reduces that are being written will go in this file
import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//full state in redux is just 1 big json object, the keys represent the slices of state that the individual reducers have
export default combineReducers({
    user: userReducer,
    cart: cartReducer
});