import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from './firebase';
import Home from './Home';
import { compose } from 'recompose';

class SignInBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({
          email: '',
          password: '',
        });
        this.props.history.push(Home);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    return (
      <>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />

          <button type="submit" disabled={isInvalid}>
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </>
    );
  }
}
const SignIn = compose(
  withRouter,
  withFirebase
)(SignInBase);

export default SignIn;
