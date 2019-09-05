import React from  'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // connect is an higher order component that lets to have access to things related to redux, higher order component takes component and returns super power components

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?  (//if currentUser is an object(its true), then <div> will be rendered, if currentUser is null(its false) then <Link> will be rendered
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                 ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
                 )}
        </div>
    </div>
)

const mapStateToProps = state => ({ // state is the top level root reducer
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);