import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div> 
      <Header />  {/* Header is placed outside the Switch because we want it to stay on the page and react will always render it on the page */}
      <Switch>
        <Route exact path='/' component={HomePage} /> {/*which component to render on which url, exact means render this component only when it exactly matches the route */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
