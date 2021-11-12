import React from 'react'
import PropTypes from 'prop-types';
import heart from '../../assets/images/heart.png'
import heart2 from '../../assets/images/heart2.png'
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
            <img src={imgSource} />
        </div>
        <div className='details-column'>
            <div>
                <div className='product-name'>
                    {ProductName}
                    <img src={iconSource === true ? heart : heart2} onClick={changeHeart} id='favorite-icon' />
                </div>
                <small>({RemainingUnit} units left)</small>
            </div>
            <div className='price'>
                <b>{Price} DKK</b>
            </div>
            <div className='input-row'>
                <select>
                    <option>Color</option>
                    <option>{productColor}</option>
                </select>
                <NumberInput initValue={1} maxAvailable={RemainingUnit} disabled={RemainingUnit < 1 ? true : false} />
            </div>
            <div className='input-row'>
                <select>
                    <option>Size</option>
                    <option>{productSize}</option>
                </select>
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
    Color: PropTypes.string,
    Size: PropTypes.string,
}

ProductDetails.defaultProps = {
    imgSource: defaultImage,
    ProductName: 'Modern table lamp',
    RemainingUnit: 20,
    Price: 200,
    Color: 'black',
    Size: 'XL',
}