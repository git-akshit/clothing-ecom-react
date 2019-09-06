import React from 'react';
import { connect } from 'react-redux'; //getting access to redux store
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? ( //it means that cartItems.length == 0 then it will return false else true
                cartItems.map(cartItem =>(
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            ) : (
                <span className='empty-message'>Your cart is empty</span>
            )}
        </div>
        <CustomButton 
        onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({ //pulling the state from redux store and getting the value
    cartItems: selectCartItems // by using selectCartItems cart will not be rendered everytime when the state changes, we have memoized the solution
});

export default withRouter(connect(mapStateToProps)(CartDropdown)); //if we donot supply mapDispatchToProps as 2nd argument to connect, then connect will provide dispatch as argument to CartDropdown, and we can use it to change the state