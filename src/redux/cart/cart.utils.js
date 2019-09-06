//utility functions allow us to keep our files clean and organize functions that we may need in multiple files in one location
export const addItemToCart = (cartItems, cartItemToAdd) => { // we need to give 2 parameters in it, first is cartItems-which has all the existing cart items in it, cartItemToAdd-which has new items to be added
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id //existingCartItem will be true if id matches, undefined otherwise, looking if id matches for cartitems and cartiemtoadd
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id  //if for each item id matches to new item id then return the items and quantity + 1 else just return the cartitem
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}] //if existingCartItem is undefined then return a new array with existing cartitems and add quantity 1 to each
};