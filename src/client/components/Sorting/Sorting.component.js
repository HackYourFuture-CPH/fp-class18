import React from 'react';
import SortingOptions from './SortingOptions.component';
import './Sorting.styles.css';

export default function Sorting() {
  const [isOptionsVisible, setIsOptionsVisible] = React.useState(false);

  // the button click renders sorting options in  SortingOptions component
  const handleClick = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  return (
    <div className="sorting-div">
      <div>
        <button onClick={handleClick} type="button" className="link-button">
          SORT BY
        </button>
      </div>
      <div>{isOptionsVisible && <SortingOptions />}</div>
    </div>
  );
}
