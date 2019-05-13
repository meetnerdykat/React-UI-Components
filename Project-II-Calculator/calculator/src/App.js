import React, { Component } from 'react';
import './App.css';
import Display from './components/DisplayComponents/Display';

class App extends Component {
  render() {
    return (
      <div className="App mt-3">
        <Display />
      </div>
    );
  }
}

export default App;
