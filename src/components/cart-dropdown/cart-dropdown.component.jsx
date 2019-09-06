import React from 'react';
import { connect } from 'react-redux'; //getting access to redux store

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.components';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ( {cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem =>(
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state =>({ //pulling the state from redux store and getting the value
    cartItems: selectCartItems(state) // by using selectCartItems cart will not be rendered everytime when the state changes, we have memoized the solution
});

export default connect(mapStateToProps)(CartDropdown);