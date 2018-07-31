import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';


// Endpoint!
const API = "http://localhost:3000/api/v1/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 100,
    };
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  />
        <Table wallet={this.state.budget}/>
      </div>
    );
  }
}

export default App;
