import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const buttons = [
    { label: '7', onClick: () => inputDigit(7) },
    { label: '8', onClick: () => inputDigit(8) },
    { label: '9', onClick: () => inputDigit(9) },
    { label: '/', onClick: () => performOperation('/'), className: 'operator' },
    { label: '4', onClick: () => inputDigit(4) },
    { label: '5', onClick: () => inputDigit(5) },
    { label: '6', onClick: () => inputDigit(6) },
    { label: '*', onClick: () => performOperation('*'), className: 'operator' },
    { label: '1', onClick: () => inputDigit(1) },
    { label: '2', onClick: () => inputDigit(2) },
    { label: '3', onClick: () => inputDigit(3) },
    { label: '-', onClick: () => performOperation('-'), className: 'operator' },
    { label: '0', onClick: () => inputDigit(0) },
    { label: '.', onClick: inputDecimal },
    { label: '=', onClick: handleEquals, className: 'equals' },
    { label: '+', onClick: () => performOperation('+'), className: 'operator' },
  ];

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <div className="calculator">
        <div className="calculator-display">{display}</div>
        <div className="calculator-clear">
          <button onClick={clear}>Clear</button>
        </div>
        <div className="calculator-buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={btn.className || ''}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
