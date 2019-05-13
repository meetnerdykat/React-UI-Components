import React, { Component } from 'react';
import './ButtonStyles.css';

class Clear extends Component {
  render() {
    return (
      <div
        className="col-9 d-flex justify-content-center align-items-center bg-light text-dark border clear"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Clear;
