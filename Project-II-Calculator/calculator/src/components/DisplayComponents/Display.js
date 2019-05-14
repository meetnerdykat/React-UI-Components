import React, { Component } from 'react';
import './DisplayStyles.css';
import Button from '../ButtonComponents/Button';
import Results from '../ButtonComponents/Results';
import Clear from '../ButtonComponents/Clear';
import Zero from '../ButtonComponents/Zero';

class Display extends Component {
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

  clearResult = () => {
    this.setState({ result: '' });
  };

  divide = () => {
    this.state.previousNumber = this.state.result;
    this.setState({ result: '' });
    this.state.operator = 'divide';
  };

  multiply = () => {
    this.state.previousNumber = this.state.result;
    this.setState({ result: '' });
    this.state.operator = 'multiply';
  };

  subtract = () => {
    this.state.previousNumber = this.state.result;
    this.setState({ result: '' });
    this.state.operator = 'subtract';
  };

  add = () => {
    this.state.previousNumber = this.state.result;
    this.setState({ result: '' });
    this.state.operator = 'plus';
  };

  solved = () => {
    this.state.currentNumber = this.state.result;

    if (this.state.operator == 'plus') {
      this.setState({
        result:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == 'subtract') {
      this.setState({
        result:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == 'multiply') {
      this.setState({
        result:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator == 'divide') {
      this.setState({
        result:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="Display">
        <div className="col-sm-5 col-md-5 col-lg-5 m-auto">
          <h3 class="text-center mb-3 fine-text">
            Welcome To My React Calculator
          </h3>
          <div className="row">
            <Results>{this.state.result}</Results>
          </div>
          <div className="row">
            <Clear handleClear={this.clearResult}>clear</Clear>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>7</Button>
            <Button handleClick={this.addToResults}>8</Button>
            <Button handleClick={this.addToResults}>9</Button>
            <Button handleClick={this.multiply}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>4</Button>
            <Button handleClick={this.addToResults}>5</Button>
            <Button handleClick={this.addToResults}>6</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToResults}>1</Button>
            <Button handleClick={this.addToResults}>2</Button>
            <Button handleClick={this.addToResults}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Zero handleClick={this.addZeroToResults}>0</Zero>
            <Button handleClick={this.solved}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Display;
