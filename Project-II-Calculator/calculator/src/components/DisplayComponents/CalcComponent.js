import React from 'react';
import './Display.css';

function CalcComponent() {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-12 bg-dark text-white col-height border d-flex justify-content-end d-flex align-items-center zero">
            0
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9 col-sm-9 col-md-9 bg-light text-dark col-height border border-top-0 border-right-0 d-flex justify-content-center d-flex  align-items-center clear-word">
            clear
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 bg-danger text-white col-height border border-left-0 border-top-0 d-flex justify-content-center d-flex  align-items-center">
            /
          </div>
        </div>
        <div className="row">
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            7
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            8
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            9
          </div>
          <div className="col col-height bg-danger text-white d-flex justify-content-center d-flex  align-items-center border border-top-0">
            x
          </div>
        </div>
        <div className="row">
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            4
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            5
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            6
          </div>
          <div className="col col-height bg-danger text-white d-flex justify-content-center d-flex  align-items-center border border-top-0">
            -
          </div>
        </div>
        <div className="row">
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            1
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            2
          </div>
          <div className="col col-height d-flex justify-content-center d-flex  align-items-center border border-top-0 border-right-0">
            3
          </div>
          <div className="col col-height bg-danger text-white d-flex justify-content-center d-flex  align-items-center border border-top-0">
            +
          </div>
        </div>
        <div className="row">
          <div className="col-xs-9 col-sm-9 col-md-9 bg-light text-dark col-height border border-top-0 d-flex justify-content-center d-flex  align-items-center">
            0
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 bg-danger text-white col-height border border-left-0 border-top-0 d-flex justify-content-center d-flex  align-items-center">
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcComponent;
