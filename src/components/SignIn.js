import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from './firebase';
import { compose } from 'recompose';
// import firebase from './firebase';

class SignInBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    console.log('PROPS', this.props);

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
