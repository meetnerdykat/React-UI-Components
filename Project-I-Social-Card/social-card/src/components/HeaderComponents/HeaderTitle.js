import React, { Component } from 'react';
import Moment from 'react-moment';
import './Header.css';

export class HeaderTitle extends Component {
  render() {
    return (
      <div>
        <h4 className="pr-3 d-inline">Lambda School</h4>
        <h6 className="text-muted d-inline">@LambdaSchool</h6>
        <small>
          {' '}
          <Moment className="ml-2 text-muted" format="MMMM DD" />
        </small>
      </div>
    );
  }
}

export default HeaderTitle;
