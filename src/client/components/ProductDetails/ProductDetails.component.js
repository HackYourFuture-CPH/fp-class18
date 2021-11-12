import React from 'react'
import PropTypes from 'prop-types';
import NumberInput from '../NumberInput/NumberInput.component'
import ButtonComponent from '../Button/Button.component'
import './ProductDetails.style.css'
import defaultImage from '../../assets/images/image01.png'


export const ProductDetails = (
    {
        imgSource,
        ProductName,
        RemainingUnit,
        Price,
        productColor,
        productSize,
        onClick,
    }
) => {
    const [iconSource, setIconSource] = React.useState(true)
    const changeHeart = () => setIconSource(!iconSource)
    // The icon can then be used to favorite the product

    return <div id="product-details">
        <div className='product-image'>
            <img src={imgSource} alt='product' />
        </div>
        <div className='details-column'>
            <div>
                <div className='product-name'>
                    {ProductName}
                    <button type='button' className={iconSource ? 'like-button' : 'like-button liked'} onClick={changeHeart}></button>
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
                    <div class="arrow-right"></div>
                </div>
                <NumberInput initValue={1} maxAvailable={RemainingUnit} />
            </div>
            <div className='input-row'>
                <div className='select-item'>
                    <select>
                        <option>Size</option>
                        <option>{productSize}</option>
                    </select>
                    <div class="arrow-right"></div>
                </div>
                <ButtonComponent title='ADD TO CARD' onClick={onClick} />
            </div>
        </div>
    </div>
}

ProductDetails.propTypes = {
    imgSource: PropTypes.string,
    ProductName: PropTypes.string,
    RemainingUnit: PropTypes.number,
    Price: PropTypes.number,
    productColor: PropTypes.string,
    productSize: PropTypes.string,
}

ProductDetails.defaultProps = {
    imgSource: defaultImage,
    ProductName: 'Modern table lamp',
    RemainingUnit: 20,
    Price: 200,
    productColor: 'black',
    productSize: 'XL',
}