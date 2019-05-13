import React, { Component } from 'react';
import './ButtonStyles.css';

class Results extends Component {
  render() {
    return (
      <div className="col-md-12 border border-dark rounded results">
        {this.props.children}
      </div>
    );
  }
}

export default Results;
