import React, { Component } from 'react';
import './ButtonStyles.css';

class Zero extends Component {
  render() {
    return (
      <div
        className="col-9 d-flex justify-content-center align-items-center bg-my-color text-light border border-dark"
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Zero;
