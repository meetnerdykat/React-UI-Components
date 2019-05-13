import React, { Component } from 'react';
import './App.css';
// import Display from './components/DisplayComponents/Display';
import Button from './components/ButtonComponents/Button';
import Results from './components/ButtonComponents/Results';
import Clear from './components/ButtonComponents/Clear';
import Zero from './components/ButtonComponents/Zero';

class App extends Component {
  render() {
    return (
      <div className="App m-5">
        <div className="col-sm-5 col-md-5 col-lg-5 m-auto">
          <div className="row">
            <Results />
          </div>
          <div className="row">
            <Clear />
            <Button>/</Button>
          </div>
          <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>X</Button>
          </div>
          <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>
          </div>
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>
          </div>
          <div className="row">
            <Zero />
            <Button>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const clearButton = {
  backgroundColor: 'pink !important'
};
