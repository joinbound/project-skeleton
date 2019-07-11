import React, { Component } from 'react';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      calView: true,
      storeView: false,
    };
    this.handleClickCal = this.handleClickCal.bind(this);
    this.handleClickStore = this.handleClickStore.bind(this);
  }
  handleClickCal = () => {
    this.setState(
      this.setState(prevState => ({
        calView: !prevState.calView,
        storeView: !prevState.storeView,
      }))
    );
  };

  handleClickStore = () => {
    this.setState(
      this.setState(prevState => ({
        storeView: !prevState.storeView,
        calView: !prevState.calView,
      }))
    );
  };

  render() {
    console.log('state', this.state);
    return (
      <>
        <div id="border">
          <h1 id="txt">Bound</h1>
          <span className="berries" />
        </div>
        <div id="nav">
          <button className="navTxt" onClick={this.handleClickCal}>
            Calendar
          </button>
          <button className="navTxt" onClick={this.handleClickStore}>
            Store
          </button>
        </div>
      </>
    );
  }
}

export default NavBar;
