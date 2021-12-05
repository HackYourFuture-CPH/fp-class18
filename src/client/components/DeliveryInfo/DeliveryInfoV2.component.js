import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryInfo.styles.css';

export default function DeliveryInfoV2({ editMode, vertDisplay, user }) {
  const { id, address, city, zipcode, country } = user;
  const [newAddress, setNewAddress] = React.useState(address);
  const [newCity, setNewCity] = React.useState(city);
  const [newZipcode, setNewZipcode] = React.useState(zipcode);
  const [newCountry, setNewCountry] = React.useState(country);
  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => setEdit(!edit);
  const handleSubmit = () => {
    fetch(`/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        address: `${newAddress === undefined ? address : newAddress}`,
        zipcode: `${newZipcode === undefined ? zipcode : newZipcode}`,
        city: `${newCity === undefined ? city : newCity}`,
        country: `${newCountry === undefined ? country : newCountry}`,
      }),
    }).then((response) => {
      if (response.ok) {
        console.log('Success');
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
            className="addressInput"
            name="address"
            type="text"
            defaultValue={address}
            onChange={(e) => setNewAddress(e.target.value)}
          />

          <label className="cityInputLabel">City:</label>
          <input
            className="cityInput"
            name="city"
            type="text"
            defaultValue={city}
            onChange={(e) => setNewCity(e.target.value)}
          />

          <label className="zipInputLabel">Zip code:</label>
          <input
            className="zipInput"
            name="zipcode"
            type="number"
            defaultValue={zipcode}
            onChange={(e) => setNewZipcode(e.target.value)}
          />

          <label className="countryInputLabel">Country:</label>
          <input
            type="text"
            className="countryInput"
            name="country"
            defaultValue={country}
            onChange={(e) => setNewCountry(e.target.value)}
          />

          <div className="saveButtonDiv">
            <button className="saveButton" type="submit">
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
                onClick={handleEdit}
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

DeliveryInfoV2.defaultProps = {
  editMode: false,
  vertDisplay: true,
};

DeliveryInfoV2.propTypes = {
  editMode: PropTypes.bool,
  vertDisplay: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    zipcode: PropTypes.number,
    country: PropTypes.string,
  }).isRequired,
};
