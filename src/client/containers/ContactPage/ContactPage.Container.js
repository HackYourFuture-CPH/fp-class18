import React from 'react';
import './ContactPage.Style.css';
import contactUs from '../../assets/images/contact-us.png';

const ContactpageContainer = () => {
  return (
    <div className="ContactpageContainer">
      <img src={contactUs} alt="contact-us" />
      <div className="boarder">
        <h1>LOCATION</h1>
        <h2>Copenhagen, Denmark</h2>
      </div>
      <div className="boarder">
        <h1>PHONE NUMBER</h1>
        <h2>+45 000 00000</h2>
      </div>
      <div className="boarder">
        <h1>EMAIL</h1>
        <h2>email@address.com</h2>
      </div>
      <div className="boarder">
        <h1>TIMINGS</h1>
        <h2>Mon - Fri 8:00 AM to 6:00 PM</h2>
      </div>
    </div>
  );
};

export default ContactpageContainer;
