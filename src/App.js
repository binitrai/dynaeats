import React, { Component } from 'react';
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import PrivateRoute from "./privateRoute";

class App extends Component {
  render () {
      return (
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Layout>
        </div>
      );
    }
}



export default App;
