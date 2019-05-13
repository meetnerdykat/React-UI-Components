import React, { Component } from 'react';
import './ButtonStyles.css';

class Button extends Component {
  isOperator = value => {
    return !isNaN(value) || value === '.' || value === 'clear';
  };

  render() {
    return (
      <div
        style={{ width: '100px', height: '100px' }}
        className={`button col d-inline-block d-flex justify-content-center align-items-center bg-light text-dark border ${
          this.isOperator(this.props.children) ? '' : 'operator'
        }`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
