import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; // we are importing this because docs on stripe api use vanilla js these are wrapper for react apps

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; //Stripe needs price inn cents
    const publishableKey = 'pk_test_7EO8Yw2FhXcxguAFX9y8CGRj008TW91AYZ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;