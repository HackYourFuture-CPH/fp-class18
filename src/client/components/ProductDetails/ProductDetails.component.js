import React from 'react'
import PropTypes from 'prop-types';
import NumberInput from '../NumberInput/NumberInput.component'
import ButtonComponent from '../Button/Button.component'
import './ProductDetails.style.css'


export const ProductDetails = (
    {
        imgSource,
        ProductName,
        RemainingUnit,
        Price,
        productColor,
        productSize,
        onClick,
        isFavorite,
        imageAlt,
    }
) => {
    const checkFavorite = () => {
        console.log('checked') // This function need to be check from the database whether the product is in favorites or not.
    }

    return <div id="product-details">
        <div className='product-image'>
            <img src={imgSource} alt={imageAlt} />
        </div>
        <div className='details-column'>
            <div>
                <div className='product-name' >
                    {ProductName}
                    <button type='button' onClick={checkFavorite}>
                        <div className={isFavorite ? 'heart' : 'purple-heart'} />
                    </button>
                </div>
                <small>({RemainingUnit} units left)</small>
            </div>
            <div className='price'>
                <b>{Price} DKK</b>
            </div>
            <div className='input-row'>
                <div className='select-item'>
                    <select>
                        <option>Color</option>
                        <option>{productColor}</option>
                    </select>
                    <div className="arrow-right" />
                </div>
                <NumberInput initValue={1} maxAvailable={RemainingUnit} />
            </div>
            <div className='input-row'>
                <div className='select-item'>
                    <select>
                        <option>Size</option>
                        <option>{productSize}</option>
                    </select>
                    <div className="arrow-right" />
                </div>
                <ButtonComponent title='ADD TO CARD' onClick={onClick} />
            </div>
        </div>
    </div>
}

ProductDetails.propTypes = {
    imgSource: PropTypes.string.isRequired,
    ProductName: PropTypes.string.isRequired,
    RemainingUnit: PropTypes.number.isRequired,
    Price: PropTypes.number.isRequired,
    productColor: PropTypes.string.isRequired,
    productSize: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    imageAlt: PropTypes.string,
}

ProductDetails.defaultProps = {
    imageAlt: 'Product Image'
}
