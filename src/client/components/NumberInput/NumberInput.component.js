import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NumberInput.styles.css';

export default function NumberInput({
  initValue,
  maxAvailable,
  getQuantity,
  disabled,
}) {
  const [inputValue, setInputValue] = useState(initValue);

  function decrementValue() {
    if (inputValue <= 1) return;
    const newValue = Number(inputValue) - 1;
    setInputValue(newValue);
    getQuantity(newValue);
  }

  function incrementValue() {
    if (inputValue === maxAvailable) return;
    const newValue = Number(inputValue) + 1;
    setInputValue(newValue);
    getQuantity(newValue);
  }

  const buttonColor = disabled ? '#d3d3d3' : 'black';

  return (
    <div className="quantity">
      <input
        style={{ color: buttonColor }}
        type="button"
        name="decrement"
        value="-"
        onClick={decrementValue}
        disabled={disabled}
      />
      <input
        style={{ color: buttonColor }}
        type="text"
        maxLength={String(maxAvailable).length}
        min={1}
        max={maxAvailable}
        value={inputValue}
        onChange={(event) =>
          !isNaN(Number(event.target.value)) &&
          Number(event.target.value > 0) &&
          setInputValue(Number(event.target.value))
        }
        disabled={disabled}
      />
      <input
        style={{ color: buttonColor }}
        type="button"
        name="increment"
        value="+"
        onClick={incrementValue}
        disabled={disabled}
      />
    </div>
  );
}

NumberInput.propTypes = {
  initValue: PropTypes.number,
  maxAvailable: PropTypes.number,
  getQuantity: PropTypes.func,
  disabled: PropTypes.bool,
};

NumberInput.defaultProps = {
  initValue: 1,
  maxAvailable: 99,
  getQuantity: (value) => value,
  disabled: false,
};
