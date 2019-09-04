import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils'; // for google auth, storing which user signed in from state in app

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
  this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => { // firebase changes the state when the user has signed in or signed out
      this.setState({ currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // calling unsubscribeFromAuth to close the subscription when componentWillUnmount or else subscription will always be open and there will be memory leaks
  }

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser} />  {/*Header gets the signed user state that is the user signed in or not, Header is placed outside the Switch because we want it to stay on the page and react will always render it on the page */}
        <Switch>
          <Route exact path='/' component={HomePage} /> {/*which component to render on which url, exact means render this component only when it exactly matches the route */}
          <Route path='/shop' component={ShopPage} />
          <Route path='/signIn' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }

}

export default App;
