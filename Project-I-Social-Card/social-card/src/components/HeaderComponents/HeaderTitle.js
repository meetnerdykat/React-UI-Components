import React, { Component } from 'react';
import Moment from 'react-moment';
import './Header.css';

export class HeaderTitle extends Component {
  render() {
    return (
      <div>
        <h4 className="pr-3 d-inline">Lambda School</h4>
        <Moment format="MM/DD/YYYY">
                2019-05-09T12:59-0500
            </Moment>
      </div>
    );
  }
}

export default HeaderTitle;
