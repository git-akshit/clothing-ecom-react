import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';

function App() {
  return (
    <div> 
      <Switch>
        <Route exact path='/' component={HomePage} /> {/*which component to render on which url, exact means render this component only when it exactly matches the route */}
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
