//actions give value to reducers 
import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const removeItem = item => ({ //it gets the item and generates the new action
    type: CartActionTypes.REMOVE_ITEM,
    payload: item  //payload can be anything, but in this case it is the item that we need to add in cart, this is listened by the reducer
});

export const clearItemFromCart = item => ({ //it gets the item and generates the new action
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item  //we will return the item which has been removed
});


export const addItem = item => ({ //it gets the item and generates the new action
    type: CartActionTypes.ADD_ITEM,
    payload: item  //payload can be anything, but in this case it is the item that we need to add in cart, this is listened by the reducer
});