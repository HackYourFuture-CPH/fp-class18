import React from 'react';
import './ContactPage.Style.css';
import contactUs from '../../assets/images/contactUs.png';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneSquare,
  FaClock,
} from 'react-icons/fa';

const ContactpageContainer = () => {
  return (
    <div className="ContactpageContainer">
      <img src={contactUs} alt="contact-us" />
      <div>
        <FaMapMarkerAlt className="item" />
        <h2>Copenhagen, Denmark</h2>
      </div>
      <div>
        <FaPhoneSquare className="item" />
        <h2>+45 000 00000</h2>
      </div>
      <div>
        <FaEnvelope className="item" />
        <h2>email@address.com</h2>
      </div>
      <div>
        <FaClock className="item" />
        <h2>Mon - Fri 8:00 AM to 6:00 PM</h2>
      </div>
    </div>
  );
};

export default ContactpageContainer;
