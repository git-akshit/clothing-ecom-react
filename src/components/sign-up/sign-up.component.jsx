import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'; // we need createUserProfileDocument because we want to create a new user and authenticate

import './sign-up.styles.scss';

class SignUp extends React.Component { // we need a state class because just like sign in, we need what user is typing in form-input
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state; 

        if(password != confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            ); //createUserWithEmailAndPassword creates a user with specified email and password and returns an auth object

            await createUserProfileDocument(user, { displayName });

            this.setState({ //this will cleasr the form after submit
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
        catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const { name, value} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state; //destructuring state for form
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;