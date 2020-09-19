import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {isLogin} from './utils/auth';

import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

export default function routes() {
  const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin()
            ? <Component {...props} />
            : <Redirect to = "/" />
        )} />
    );
  };

  return (
    <Switch>
      <Route path = "/" component = {Index} exact/>
      <Route path = "/login" component = {Login} />
      <Route path = "/register" component = {Register} />
      <PrivateRoute path = "/home" component = {Home} />
      <PrivateRoute path = "/users" component = {Profile} />
      {/* <PrivateRoute path = "/users/:id" component = {Profile} /> */}
    </Switch>
  )
}
