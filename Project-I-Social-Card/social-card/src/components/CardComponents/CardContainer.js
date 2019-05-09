import React from 'react';
import Card from './Card';
import './Card.css';

function CardContainer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-2 m-0" />
        <div className="col-md-10">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
