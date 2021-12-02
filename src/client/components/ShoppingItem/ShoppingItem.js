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
}) {
  const [itemValue, setItemValue] = useState(1);
  const textColor = isDisable ? '#d3d3d3' : 'black';
  return (
    <div className="shopping-item">
      <img src={productImg} alt="" width="185px" height="145px" />
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
          <button disabled={isDisable} type="button" onClick="" className="add">
            <Heart height="20" stroke={isDisable ? '#d3d3d3' : 'black'} /> Add
            to favorites
          </button>
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
};

ShoppingItem.defaultProps = {
  initValue: 1,
  isDisable: false,
};
