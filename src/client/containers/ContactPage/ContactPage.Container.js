import React from 'react';
import './ContactPage.Style.css';
import contactUs from '../../assets/images/contactUs.png';
import map from '../../assets/images/location-icon.png';
import envelop from '../../assets/images/email-icon.png';
import phone from '../../assets/images/Phone_icon.png';
import clock from '../../assets/images/clock-icon.png';

const ContactpageContainer = () => {
  return (
    <div className="ContactpageContainer">
      <img src={contactUs} alt="contact-us" />
      <div>
        <img src={map} alt="location" className="item" />
        <h2>Copenhagen, Denmark</h2>
      </div>
      <div>
        <img src={phone} alt="phoneNumber" className="item" />
        <h2>+45 000 00000</h2>
      </div>
      <div>
        <img src={envelop} alt="email" className="item" />
        <h2>email@address.com</h2>
      </div>
      <div>
        <img src={clock} alt="openingTimes" className="item" />
        <h2>Mon - Fri 8:00 AM to 6:00 PM</h2>
      </div>
    </div>
  );
};

export default ContactpageContainer;
