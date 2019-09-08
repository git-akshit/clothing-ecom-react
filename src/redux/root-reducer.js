//root reducer is the base state of all the states in our application, it combines all our states together, all the reduces that are being written will go in this file
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'; //importing the persist reducer library as we imported the persist store
import storage from 'redux-persist/lib/storage'; //we are telling we need local storage as persist storage for default

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root', //from where we want to start persisting the storage, we want to start from root
    storage, // which storage to apply 
    whitelist: ['cart'] //which all reducers to persist in local storage, as user is handled by firebase so we are using cart
}

//full state in redux is just 1 big json object, the keys represent the slices of state that the individual reducers have
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

//full state in redux is just 1 big json object, the keys represent the slices of state that the individual reducers have
export default persistReducer(persistConfig, rootReducer); // persistReducer will take rootReducer and use persistConfig to convert rootReducer to be stored in local storage