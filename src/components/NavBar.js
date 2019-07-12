import React, { Component } from 'react';
import Store from './Store';
import Calendar from './Calendar';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      storeView: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    if (event.target.className === 'store' && !this.state.storeView) {
      this.setState(() => ({
        storeView: true,
      }));
    } else if (
      event.target.className === 'cal' &&
      this.state.storeView === true
    ) {
      this.setState(() => ({
        storeView: false,
      }));
    }
  };
  render() {
    let screen;
    if (this.state.storeView === true) {
      screen = <Store />;
    } else if (this.state.storeView === false) {
      screen = <Calendar />;
    }

    return (
      <>
        <div id="border">
          <h1 id="txt">Bound</h1>
          <span className="berries" />
        </div>
        <div id="nav">
          <button className="cal" onClick={this.handleClick}>
            Calendar
          </button>
          <button className="store" onClick={this.handleClick}>
            Store
          </button>
        </div>
        {screen}
      </>
    );
  }
}

export default NavBar;
