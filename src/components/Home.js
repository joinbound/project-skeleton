import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      selected: true,
    };
  }
  render() {
    return (
      <>
        <div id="border">
          <h1 id="txt">Bound</h1>
          <span className="berries" />
        </div>
        <div id="nav">
          <button className="navTxt">Calendar</button>
          <button className="navTxt">Store</button>
        </div>
      </>
    );
  }
}

export default Home;
