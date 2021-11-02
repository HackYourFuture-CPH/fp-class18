import React from 'react';
import SortingCategories from './SortingCategories.component';

export default function SortingOptions() {
  const [isCategoryVisible, setIsCategoryVisible] = React.useState(false);

  // the button click renders product categories in  SortingCategories component.
  const handleShowCategories = () => {
    setIsCategoryVisible(!isCategoryVisible);
  };

  return (
    <div>
      <div>
        <button type="button" className="option-button">
          Alphabetic A-Z
        </button>
      </div>
      <div>
        <button type="button" className="option-button">
          Alphabetic Z-A
        </button>
      </div>
      <div>
        <button type="button" className="option-button">
          New Products
        </button>
      </div>
      <div>
        <button
          onClick={handleShowCategories}
          type="button"
          className="option-button"
        >
          Category
        </button>
      </div>
      <div>{isCategoryVisible && <SortingCategories />}</div>
    </div>
  );
}
