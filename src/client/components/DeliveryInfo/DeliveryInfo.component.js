import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryInfo.styles.css';

export default function DeliveryInfo({ editMode, vertDisplay, user }) {
  const [edit, setEdit] = React.useState(false);
  const handleEdit = () => setEdit(!edit);
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
        alert('User saved Successfully');
      } else {
        throw new Error(response.status);
      }
    });
  };
  return (
    <div className="infoBox">
      <div className="wrapper">
        {edit ? (
          <form className="form" onSubmit={handleSubmit}>
            <label className="title">DELIVERY INFO</label>
            <label className="addressLabel">Address</label>
            <input
              defaultValue={user.address}
              className="address"
              name="address"
              type="text"
            />

            <label className="cityLabel">City</label>
            <input
              defaultValue={user.city}
              className="city"
              name="city"
              type="text"
            />

            <label className="zipLabel">Zip code</label>
            <input
              defaultValue={user.zip}
              className="zip"
              name="zipcode"
              type="number"
            />

            <label className="countryLabel">Country</label>
            <input
              defaultValue={user.country}
              className="country"
              name="country"
            />

            <button type="submit" className="saveButton">
              Save
            </button>
            <span className="cancelLink">
              <button
                type="button"
                onClick={handleEdit}
                className="link-button"
              >
                Cancel
              </button>
            </span>
          </form>
        ) : (
          <form className="form">
            <label className="title">DELIVERY INFO</label>
            {editMode ? (
              <span className="editLink">
                <button
                  type="button"
                  onClick={handleEdit}
                  className="link-button"
                >
                  Edit
                </button>
              </span>
            ) : (
              ''
            )}
            <label className="addressLabel">Address:</label>
            <label className={`${vertDisplay ? 'addressVert' : 'address'}`}>
              {user.address}
            </label>

            <label className={`${vertDisplay ? 'cityLabelVert' : 'cityLabel'}`}>
              City:
            </label>
            <label className={`${vertDisplay ? 'cityVert' : 'city'}`}>
              {user.city}
            </label>

            <label className="zipLabel">Zip code:</label>
            <label className="zip">{user.zip}</label>

            <label
              className={`${vertDisplay ? 'countryLabelVert' : 'countryLabel'}`}
            >
              Country:
            </label>
            <label className={`${vertDisplay ? 'countryVert' : 'country'}`}>
              {user.country}
            </label>
          </form>
        )}{' '}
      </div>
    </div>
  );
}

DeliveryInfo.defaultProps = {
  editMode: false,
  vertDisplay: true,
  user: {
    address: '',
    city: '',
    zip: '',
    country: '',
  },
};

DeliveryInfo.propTypes = {
  editMode: PropTypes.bool,
  vertDisplay: PropTypes.bool,
  user: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.number,
    country: PropTypes.string,
  }),
};
