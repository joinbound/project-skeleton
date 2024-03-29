import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SignIn, NavBar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';
import Firebase from './components/firebase/firebase';
import { FirebaseContext } from './components/firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <SignIn>
        <NavBar />
      </SignIn>
    </Router>
  </FirebaseContext.Provider>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
