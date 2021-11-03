import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NumberInput.styles.css';

export default function NumberInput({ initValue, maxAvailable }) {
  const [inputValue, setInputValue] = useState(initValue);

  function decrementValue() {
    if (inputValue <= 1) return;
    return setInputValue(Number(inputValue) - 1);
  }

  function incrementValue() {
    if (inputValue === maxAvailable) return;
    return setInputValue(Number(inputValue) + 1);
  }

  return (
    <div className="quantity">
      <input
        type="button"
        name="decrement"
        value="-"
        onClick={decrementValue}
      />
      <input
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
      />
      <input
        type="button"
        name="increment"
        value="+"
        onClick={incrementValue}
      />
    </div>
  );
}

NumberInput.propTypes = {
  initValue: PropTypes.number,
  maxAvailable: PropTypes.number,
};

NumberInput.defaultProps = {
  initValue: 1,
  maxAvailable: 99,
};
