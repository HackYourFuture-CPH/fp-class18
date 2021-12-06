import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryInfo.styles.css';

export default function DeliveryInfo({ editMode, vertDisplay, user }) {
  const [address, setAddress] = React.useState(user.address);
  const [city, setCity] = React.useState(user.city);
  const [zipcode, setZipcode] = React.useState(user.zipcode);
  const [country, setCountry] = React.useState(user.country);
  const [edit, setEdit] = React.useState(false);

  const handleEdit = (e) => {
    e.preventDefault();
    setEdit(!edit);
  };

  const handleSubmit = (event) => {
    fetch('/api/users', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: event.target.address.value,
        zipcode: event.target.zipcode.value,
        city: event.target.city.value,
        country: event.target.country.value,
      }),
    }).then((response) => {
      if (response.ok) {
        // eslint-disable-next-line no-alert
        alert('User saved Successfully');
      } else {
        throw new Error(response.status);
      }
    });
  };

  return (
    <div className="wrapperDelivery">
      {edit ? (
        <form className="formDelivery" onSubmit={handleSubmit}>
          <label className="titleDelivery">DELIVERY INFO:</label>
          <label className="addressInputLabel">Address:</label>
          <input
            value={address}
            className="addressInput"
            name="address"
            type="text"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />

          <label className="cityInputLabel">City:</label>
          <input
            value={city}
            className="cityInput"
            name="city"
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />

          <label className="zipInputLabel">Zip code:</label>
          <input
            value={zipcode}
            className="zipInput"
            name="zipcode"
            type="number"
            onChange={(e) => {
              setZipcode(e.target.value);
            }}
          />

          <label className="countryInputLabel">Country:</label>
          <input
            value={country}
            className="countryInput"
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />

          <div className="saveButtonDiv">
            <button className="saveButton" type="submit" onClick={handleEdit}>
              SAVE
            </button>
          </div>
          <span className="cancelLink">
            <button type="button" onClick={handleEdit} className="link-button">
              Cancel
            </button>
          </span>
        </form>
      ) : (
        <form className="formDelivery">
          <label className="titleDelivery">DELIVERY INFO:</label>
          {editMode && (
            <span className="editLink text-right">
              <button
                type="button"
                onClick={() => {
                  setEdit(true);
                }}
                className="link-button"
              >
                Edit
              </button>
            </span>
          )}
          <label className="addressLabel">Address: {address}</label>

          <label
            className={`${
              vertDisplay ? 'cityLabelVert' : 'cityLabel text-right'
            }`}
          >
            City: {city}
          </label>

          <label className="zipLabel">Zip code: {zipcode}</label>

          <label
            className={`${
              vertDisplay ? 'countryLabelVert' : 'countryLabel text-right'
            }`}
          >
            Country: {country}
          </label>
        </form>
      )}
    </div>
  );
}

DeliveryInfo.defaultProps = {
  editMode: false,
  vertDisplay: true,
};

DeliveryInfo.propTypes = {
  editMode: PropTypes.bool,
  vertDisplay: PropTypes.bool,
  user: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.number,
    country: PropTypes.string,
  }).isRequired,
};
