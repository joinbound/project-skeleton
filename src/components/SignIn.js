import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from './firebase';
import { compose } from 'recompose';

class SignInBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, user: null };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        console.log('have user', socialAuthUser);
        this.setState({ error: null, user: socialAuthUser });
      })

      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignIn = compose(
  withRouter,
  withFirebase
)(SignInBase);

export default SignIn;
