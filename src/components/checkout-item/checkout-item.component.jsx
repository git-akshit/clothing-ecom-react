import React from 'react';
import { connect } from 'react-redux'; //importing redux because we want to bind the removed item into state 

import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => { //passing the whole cartItem and also destructuring the props that we need below, we are passing the whole cartItem because user can increase or decrease the quantity or delete it and we want to store that in store
    const { name, imageUrl, price, quantity } = cartItem; 
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity} </span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price} </span>
            <span className='remove-button' onClick={() => clearItem(cartItem)}> {/*calling clearitem to remove an item from checkout page */}
                &#10005;
            </span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)), //dispatching the cart with removed item to redux store
    addItem: item => dispatch(addItem(item)), //dispatching the cart with added item to redux store
    removeItem: item => dispatch(removeItem(item)) //dispatching the cart with decreased item to redux store
});

export default connect(
    null,
    mapDispatchToProps
)(CheckoutItem);
