import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

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
            };
         case CartActionTypes.REMOVE_ITEM: //reducer listens for adding item in cart 
            return {
                ...state, //we are returning the new state of overall cart reducer
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART: //listening the CLEAR_ITEM_FROM_CART action
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id //action.payload.id means the item that we are trying to remove, if cartItem is not equal action.payload item then keep the cart item or else delete it, since filter returns true then it will keep it else it will remove it 
                )
            };
        default:
            return state;
    }
}

export default cartReducer;