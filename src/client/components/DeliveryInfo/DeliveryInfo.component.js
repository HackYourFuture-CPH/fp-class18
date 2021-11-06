import React from 'react';
import PropTypes from 'prop-types';
import './DeliveryInfo.styles.css';

export default function DeliveryInfo({editMode, user}) {
    const [edit, setEdit] = React.useState(editMode);
    const handleEdit = () => setEdit(!edit);
    return (<div className="infoBox">
        <div className="wrapper"> {
            edit ? <form className="form" action="">
                <label className="title">DELIVERY INFO</label>
                <label className="addressLabel">Address</label>
                <input defaultValue={
                        user.address
                    }
                    className="address"
                    id="address"
                    type="text"/>

                <label className="cityLabel">City</label>
                <input defaultValue={
                        user.city
                    }
                    className="city"
                    id="city"
                    type="text"/>

                <label className="zipLabel">Zip code</label>
                <input defaultValue={
                        user.zip
                    }
                    className="zip"
                    id="zip"
                    type="number"/>

                <label className="countryLabel">Country</label>
                <input defaultValue={
                        user.country
                    }
                    className="country"
                    id="country"/>

                <button type="submit" className="saveButton">Save</button>
                <span className="cancelLink">
                    <button type="button"
                        onClick={handleEdit}
                        className="link-button">Cancel</button>
                </span>
            </form> : <form className="form">
                <label className="title">DELIVERY INFO</label>
                <span className="editLink">
                    <button type="button"
                        onClick={handleEdit}
                        className="link-button">Edit</button>
                </span>
                <label className="addressLabel">Address:</label>
                <label className="address"> {
                    user.address
                }</label>

                <label className="cityLabel">City:</label>
                <label className="city"> {
                    user.city
                }</label>

                <label className="zipLabel">Zip code:</label>
                <label className="zip"> {
                    user.zip
                }</label>

                <label className="countryLabel">Country:</label>
                <label className="country"> {
                    user.country
                }</label>
            </form>
        } </div>
    </div>);
}

DeliveryInfo.defaultProps = {
    editMode: false,
    user: {
        address: "Vildkildevej 21",
        city: "Hedehusene",
        zip: "2640",
        country: "Denmark"
    }
};

DeliveryInfo.propTypes = {
    editMode: PropTypes.bool,
    user: PropTypes.shape(
        {address: PropTypes.string, city: PropTypes.string, zip: PropTypes.number, country: PropTypes.string}
    )
};
