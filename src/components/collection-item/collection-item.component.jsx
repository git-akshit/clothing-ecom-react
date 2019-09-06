import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

//collection-item is single display image
const CollectionItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item; //destructuring properties from item
    return ( //expilicit return of the function
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted> {/*item is being added in the cart */}
            Add to cart </CustomButton>
    </div>
)};

const mapDispatchToProps = dispatch => ({   //it will dispatch item to store
    addItem: item => dispatch(addItem(item))  //addItem will go in above components, addItem will recieve item as property and dispatch it into addItem action creator which gives us back that object in which type is eqaul to ADD_ITEM and payload is equal to item that we passed in and then we will dipatch that new object into our store and will go through our redux flow
})

export default connect(
    null,
    mapDispatchToProps
)(CollectionItem);