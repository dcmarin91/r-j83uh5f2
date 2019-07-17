import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.increment = this.increment.bind(this);

    this.state = { value: 0 }
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.increment}></textarea>
        <div className="counter">{this.state.value}</div>
      </div>
    );
  }
  increment(ev) {
    this.setState({ value: ev.target.value.length});
  }
}

export default App;