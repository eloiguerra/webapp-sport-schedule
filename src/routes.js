import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

export default function routes() {
  return (
    <Switch>
      <Route path = "/" component = {Index} exact/>
      <Route path = "/login" component = {Login} />
      <Route path = "/register" component = {Register} />
    </Switch>
  )
}
