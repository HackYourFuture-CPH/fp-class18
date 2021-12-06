import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Numberinput from '../NumberInput/NumberInput.component';
import { Heart } from './heart.js';
import { Trash } from './Trash.js';
import './ShoppingItem.styles.css';

export default function ShoppingItem({
  productImg,
  productName,
  quantity,
  price,
  initValue,
  isDisable,
  getCost,
}) {
  const [itemValue, setItemValue] = useState(initValue);
  React.useEffect(() => {
    getCost(itemValue * price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemValue]);
  const textColor = isDisable ? '#d3d3d3' : 'black';
  return (
    <div className="shopping-item">
      <div className="product-picture">
        <div className="picture">
          <img
            // eslint-disable-next-line
            src={require(`../../assets/images/${productImg.split('/')[4]}`)}
            alt={productName}
            width="185px"
            height="145px"
          />
        </div>

        <div className="item-settings">
          <h2>{productName}</h2>
          <p style={{ color: textColor }}>({quantity} units left)</p>
          <div className="trash">
            <button
              disabled={isDisable}
              type="button"
              onCLick=""
              className="remove"
            >
              <Trash
                height="20"
                stroke={isDisable ? '#d3d3d3' : '#000000'}
                fill={isDisable ? '#d3d3d3' : '#000000'}
              />
              Remove Item
            </button>
          </div>
          <div className="favorites">
            <button
              disabled={isDisable}
              type="button"
              onClick=""
              className="add"
            >
              <Heart height="20" stroke={isDisable ? '#d3d3d3' : 'black'} /> Add
              to favorites
            </button>
          </div>
        </div>
      </div>
      <div className="quantity-component">
        <Numberinput
          maxAvailable={quantity}
          getQuantity={setItemValue}
          initValue={initValue}
          disabled={isDisable}
        />
        <p style={{ color: textColor }}>{itemValue * price} DKK</p>
      </div>
    </div>
  );
}

ShoppingItem.propTypes = {
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  initValue: PropTypes.number,
  isDisable: PropTypes.bool,
  getCost: PropTypes.func,
};

ShoppingItem.defaultProps = {
  initValue: 1,
  isDisable: false,
  getCost: (value) => value,
};
