import React from 'react';
import { SignIn } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <SignIn />
      </Router>
    </>
  );
};

export default App;
