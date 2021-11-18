import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../NumberInput/NumberInput.component';
import ButtonComponent from '../Button/Button.component';
import './ProductDetails.style.css';
import Heart from './Heart';

export const ProductDetails = ({
  imgSource,
  ProductName,
  RemainingUnit,
  Price,
  productColor,
  productSize,
  onClick,
  isFavorite,
  imageAlt,
}) => {
  const [color, setColor] = React.useState('');
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [checked, setChecked] = React.useState(isFavorite);

  const checkFavorite = () => {
    // This function need to be change database for add or remove from favorite.
    setChecked(!checked);
  };
  const getQuantity = (val) => {
    setQuantity(val);
  };

  return {
    color,
    size,
    quantity,
    render: (
      <div id="product-details">
        <div className="product-image">
          <img src={imgSource} alt={imageAlt} />
        </div>
        <div className="details-column">
          <div>
            <div className="product-name">
              {ProductName}
              <button type="button" onClick={checkFavorite}>
                <div className="heart">
                  {' '}
                  {checked ? (
                    <Heart height="30" />
                  ) : (
                    <Heart height="30" fill="#8E0EF2" strokeWidth="0" />
                  )}{' '}
                </div>
              </button>
            </div>
            <small>({RemainingUnit} units left)</small>
          </div>
          <div className="price">
            <b>{Price} DKK</b>
          </div>
          <div className="input-row">
            <div className="select-item">
              <select onChange={(e) => setColor(e.target.value)}>
                <option>Color</option>
                <option value={productColor}>{productColor}</option>
              </select>
              <div className="arrow-right" />
            </div>
            <NumberInput
              initValue={1}
              maxAvailable={RemainingUnit}
              getQuantity={getQuantity}
            />
          </div>
          <div className="input-row">
            <div className="select-item">
              <select onChange={(e) => setSize(e.target.value)}>
                <option>Size</option>
                <option value={productSize}>{productSize}</option>
              </select>
              <div className="arrow-right" />
            </div>
            <ButtonComponent title="ADD TO CART" onClick={onClick} />
          </div>
        </div>
      </div>
    ),
  };
};

ProductDetails.propTypes = {
  imgSource: PropTypes.string.isRequired,
  ProductName: PropTypes.string.isRequired,
  RemainingUnit: PropTypes.number.isRequired,
  Price: PropTypes.number.isRequired,
  productColor: PropTypes.string.isRequired,
  productSize: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool,
  imageAlt: PropTypes.string,
};

ProductDetails.defaultProps = {
  imageAlt: 'Product Image',
  isFavorite: true,
};
