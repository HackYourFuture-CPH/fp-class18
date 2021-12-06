import React from 'react';
import PropTypes from 'prop-types';
import NumberInput from '../NumberInput/NumberInput.component';
import ButtonComponent from '../Button/Button.component';
import './ProductDetails.style.css';
import Heart from './Heart';
import ModalComponent from '../Modal/Modal.component';

export const ProductDetails = ({
  userId,
  productId,
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
  const [checked, setChecked] = React.useState(isFavorite);
  const checkFavoriteHandler = () => {
    // This function need to be change database for add or remove from favorite.
    if (checked) {
      fetch(`/api/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: `${productId}`,
        }),
      }).then((response) => {
        if (response.ok) {
          console.log('Success');
        } else {
          throw new Error(response.status);
        }
      });
    } else {
      fetch(`/api/users/${userId}/favorites`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: `${productId}`,
        }),
      }).then((response) => {
        if (response.ok) {
          console.log('Success');
        } else {
          throw new Error(response.status);
        }
      });
    }
    setChecked(!checked);
  };
  const [isShown, setIsShown] = React.useState(false);
  const handleClick = () => {
    setIsShown(!isShown);
    onClick();
  };
  const handleLink = () => {
    window.location.href = '/';
  };

  return (
    <div id="product-details">
      <div className="product-image">
        <img
          // eslint-disable-next-line
          src={require(`../../assets/images/${imgSource.split('/')[4]}`)}
          alt={imageAlt}
        />
      </div>
      <div className="details-column">
        <div>
          <div className="product-name">
            <span className="text">{ProductName}</span>
            <button type="button" onClick={checkFavoriteHandler}>
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
          <b className="text">{Price} DKK</b>
        </div>
        <div className="inputs">
          <div className="input-row">
            <div className="select-item">
              <select>
                <option selected="true" disabled="disabled">
                  Color
                </option>
                <option>{productColor}</option>
              </select>
              <div className="arrow-right" />
            </div>
            <div className="select-item">
              <select>
                <option selected="true" disabled="disabled">
                  Size
                </option>
                <option>{productSize}</option>
              </select>
              <div className="arrow-right" />
            </div>
          </div>
          <div className="input-row">
            <NumberInput initValue={1} maxAvailable={RemainingUnit} />
            <ButtonComponent title="ADD TO CART" onClick={handleClick} />
            <ModalComponent
              show={isShown}
              handleLink={handleLink}
              handleCloseModal={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
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
