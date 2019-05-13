import React, { Component } from 'react';
import './App.css';
// import Display from './components/DisplayComponents/Display';
import Button from './components/ButtonComponents/Button';
import Results from './components/ButtonComponents/Results';
import Clear from './components/ButtonComponents/Clear';
import Zero from './components/ButtonComponents/Zero';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: '',
      previousNumber: '',
      currentNumber: '',
      operator: ''
    };
  }

  addToResults = value => {
    this.setState({ result: this.state.result + value });
  };

  addZeroToResults = value => {
    // if this.state.result is not empty then add zero
    if (this.state.result !== '') {
      this.setState({ result: this.state.result + value });
    }
  };

  render() {
    return (
      <div className="App m-5">
        <div className="col-sm-5 col-md-5 col-lg-5 m-auto">
          <div className="row">
            <Results>{this.state.result}</Results>
          </div>
          <div className="row">
            <Clear />
            <Button>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>7</Button>
            <Button handleClick={this.addToResults}>8</Button>
            <Button handleClick={this.addToResults}>9</Button>
            <Button>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>4</Button>
            <Button handleClick={this.addToResults}>5</Button>
            <Button handleClick={this.addToResults}>6</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>1</Button>
            <Button handleClick={this.addToResults}>2</Button>
            <Button handleClick={this.addToResults}>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Zero handleClick={this.addZeroToResults}>0</Zero>
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
