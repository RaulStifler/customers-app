import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomerContainer from './containers/CustomerContainer';
import CustomersContainer from './containers/CustomersContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/customers" component={CustomersContainer} />
      <Switch>
        <Route path="/customers/new" component={NewCustomerContainer} />
        <Route path="/customers/:dni" render={({ match }) => <CustomerContainer dni={match.params.dni} />} />
      </Switch>
    </React.Fragment>
  </Router>
);

export default App;
