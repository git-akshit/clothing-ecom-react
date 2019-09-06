import React from 'react';

import './custom-button.styles.scss';

//Stateless Custom Button

const CustomButton = ({ 
    children,
    isGoogleSignIn,
    inverted, 
    ...otherProps 
    }) => ( //children are like submit button
    <button 
    className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`} // if isGoogleSignIn then google-sign-in is rendered else null, custom-button is always rendered
        {...otherProps}
    > 
        {children}
    </button>
);

export default CustomButton;

