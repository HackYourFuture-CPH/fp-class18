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
}) {
  const [itemValue, setItemValue] = useState(1);
  return (
    <div className="shopping-item">
      <img src={productImg} alt="" width="185px" height="145px" />
      <div className="item-settings">
        <h2>{productName}</h2>
        <p>({quantity} units left)</p>
        <div className="trash">
          <button type="button" onCLick="" className="remove">
            <Trash height="20" /> Remove Item
          </button>
        </div>
        <div className="favorites">
          <button type="button" onClick="" className="add">
            <Heart height="20" /> Add to favorites
          </button>
        </div>
      </div>
      <div className="quantity-component">
        <Numberinput
          maxAvailable={quantity}
          getQuantity={setItemValue}
          initValue={1}
        />
        <p>{itemValue * price} DKK</p>
      </div>
    </div>
  );
}

ShoppingItem.propTypes = {
  productImg: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
