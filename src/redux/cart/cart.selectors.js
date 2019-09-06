import { createSelector } from 'reselect';

//1st type of selector input selector, which dosent need createSelector
//it gets the whole state and returns just the slice of it, one layer usually
const selectCart = state => state.cart;

//2nd selector is output selector, it takes create selector and input selector
export const selectCartItems = createSelector( //it takes 2 arguments, 1st is the array of input selectors , second argument is the function that will return the value that we want from this selector
    [selectCart], 
    (cart) => cart.cartItems
)

//since we used createSelector it is now a memoized selector

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity + cartItem.quantity,
            0
        )
);