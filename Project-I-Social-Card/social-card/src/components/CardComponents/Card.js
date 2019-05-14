import React from 'react';
import './Card.css';
import logo from './logo.svg';

function Card() {
  return (
    <div>
      <div className="card">
        <img
          src={logo}
          alt="React Logo"
          className="card-img-top bg-dark"
          height="300"
        />
        <div className="card-body">
          <h5 className="card-title mb-0">
            {' '}
            <strong>Get started with React</strong>
          </h5>
          <p className="card-text mt-2 mb-0">
            React makes it painless to create interactive UI's. Design simple
            views for each state in your application.
          </p>
          <a href="https://reactjs.org" className="text-secondary">
            reactjs.org
          </a>
          <ul className="list-group list-group-horizontal mt-3">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0">
              <i className="far fa-comment text-muted" />
              <span className="badge badge-pill">20</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0">
              <i className="fas fa-sync-alt text-muted" />
              <span className="badge badge-pill">15</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0">
              <i className="far fa-heart text-muted" />
              <span className="badge badge-pill">10</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0">
              <i className="far fa-envelope text-muted" />
              <span className="badge badge-pill">5</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
