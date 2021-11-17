import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryInformation.styles.css';

export function DeliveryInformation({ sampleAddress }) {
  return (
    <div className="DeliveryInfo">
      <label className="addressTitle">DELIVERY INFO:</label>
      <ul>
        <li>
          <label className="addressLabel">Address:</label>
          <label className="addressData"> {sampleAddress.address}</label>
        </li>
        <li>
          <label className="zipCodeLabel">Zip code:</label>
          <label className="zipCodeData"> {sampleAddress.zipCode}</label>
        </li>
        <li>
          <label className="cityLabel">City:</label>
          <label className="cityData"> {sampleAddress.city}</label>
        </li>
        <li>
          <label className="countryLabel">Country:</label>
          <label className="countryData"> {sampleAddress.country}</label>
        </li>
      </ul>
    </div>
  );
}

DeliveryInformation.defaultProps = {
  editMode: false,
  sampleAddress: {
    address: 'Enghavevej 80',
    city: 'København',
    zipCode: '2450',
    country: 'Denmark',
  },
};

DeliveryInformation.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.number,
    country: PropTypes.string,
  }),
};
