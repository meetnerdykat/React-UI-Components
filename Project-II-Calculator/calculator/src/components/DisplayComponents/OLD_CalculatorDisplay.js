import React from 'react';
import NumberButton from '../ButtonComponents/NumberButtons';
import OperatorButton from '../ButtonComponents/OperatorButtons';
import ClearButton from '../ButtonComponents/ClearButton';
import ZeroButton from '../ButtonComponents/ZeroButton';
import './Display.css';

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
const operators = ['/', 'x', '-', '+', '='];

function CalculatorDisplay() {
  // will house the topmost results of caculations
  return (
    <div>
      <div className="col-md-6">
        <ZeroButton />
        <div className="row">
          <div className="col-md-9 bg-dark text-white col-height border justify-content-end d-flex align-items-center">
            <ClearButton />
          </div>

          <div className="col-md-3 p-0">
            {operators.map(operatorFromMap => (
              <OperatorButton
                operator={operatorFromMap}
                key={operatorFromMap}
              />
            ))}
          </div>
          <div className="d-flex">
            {numbers.map(numberFromMap => (
              <NumberButton number={numberFromMap} key={numberFromMap} />
            ))}
          </div>
        </div>

        {/* Final col-md-6 div */}
      </div>
      {/* Final div */}
    </div>
  );
}

export default CalculatorDisplay;

// {numbers.map(numberFromMap => (
//   <NumberButton number={numberFromMap} key={numberFromMap} />
// ))}
// {operators.map(operatorFromMap => (
//   <OperatorButton operator={operatorFromMap} key={operatorFromMap} />
// ))}
