import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, Home } from '../components';

//is logged in show app if not show sign in screen

const Navigation = () => (
  <div>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/home" component={Home} />
  </div>
);

export default Navigation;
