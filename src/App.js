import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; // for google auth, storing which user signed in from state in app
import { setCurrentUser} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => { // firebase changes the state when the user has signed in or signed out
    if (userAuth) {
       const userRef = await createUserProfileDocument(userAuth); // user is getting back from auth library

       userRef.onSnapshot(snapShot => { //from here we will get the data of newly created user, or data of already stored user
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data() // .data() actually contains the data like name, email etc
        });
       // console.log(this.state);
       });
      } else{ // if user is not signed in
        setCurrentUser(userAuth); // this is equalivalent to saying current user to null
      }
     // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // calling unsubscribeFromAuth to close the subscription when componentWillUnmount or else subscription will always be open and there will be memory leaks
  }

  render() {
    return (
      <div> 
        <Header />  {/*Header gets the signed user state that is the user signed in or not, Header is placed outside the Switch because we want it to stay on the page and react will always render it on the page */}
        <Switch>
          <Route exact path='/' component={HomePage} /> {/*which component to render on which url, exact means render this component only when it exactly matches the route */}
          <Route path='/shop' component={ShopPage} />  {/*shop is not exact because there are categories, hat to be shopped */}
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
          exact 
          path='/signIn' 
          render={() =>
            this.props.currentUser ? (
              <Redirect to='/' /> //if user is signed in then take to home else sign in sign up
            ) : (
              <SignInAndSignUpPage />
            )  
          } 
          />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) // dispatch is a way from which redux knows that an action is being passed to it and it passes to every reducer, we give setCurrentUser the user, which is the value for payload, we are dispatching the user to payload 
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);//first argument is null because we dont need state for props 
