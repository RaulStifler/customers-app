import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/customers" component={CustomerContainer} />
      </Switch>
    </Router>
  );
}

export default App;
