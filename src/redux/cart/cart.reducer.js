import CartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: //reducer listens for adding item in cart 
            return {
                ...state, //we are returning the new state of overall cart reducer
                cartItems:addItemToCart(state.cartItems, action.payload)//cartItems is new array ,from ...state.cartItems we are loading the already selected items from state in cart, action.payload is ading any new items in cart
            }
        default:
            return state;
    }
}

export default cartReducer;