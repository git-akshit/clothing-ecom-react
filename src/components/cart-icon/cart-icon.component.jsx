import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden} from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden , itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({ //it pulls off the whole state from redux store, and only displays the slice of the state(quantity), counting the total quantity in the cart
    itemCount: selectCartItemsCount(state) // passing the whole reducer state to selectCartItemsCount
}); //every time the state changes it is rerendered, even if user logs in or logs out

export default connect(
    mapStateToProps,
    mapDispatchProps
)(CartIcon);