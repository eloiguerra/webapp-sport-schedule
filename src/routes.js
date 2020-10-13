import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {isLogin} from './utils/auth';

import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import VisitProfile from './pages/VisitProfile';
import Friends from './pages/Friends';

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
      <PrivateRoute path = "/users" component = {Profile} exact />
      <PrivateRoute path = "/users/:id" component = {VisitProfile} exact />
      <PrivateRoute path = "/users/friends/:id" component = {Friends} />
    </Switch>
  )
}
