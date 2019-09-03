import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div> 
      <Route exact path='/' component={HomePage} /> {/*which component to render on which url, exact means render this component only when it exactly matches the route */}
      <Route path='/hats' component={HatsPage} />
    </div>
  );
}

export default App;
