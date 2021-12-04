import React from 'react';
import './ContactPage.Style.css';
import contactUs from '../../assets/images/contactPoster.png';
import contactRegion from '../../assets/images/contactRegion.png';
import contactPhone from '../../assets/images/contactPhone.png';
import contactEmail from '../../assets/images/contactEmail.png';
import contactTimings from '../../assets/images/contactTimings.png';

const ContactpageContainer = () => {
  return (
    <div className="contactPageContainer">
      <img src={contactUs} alt="contact-us" />
      <div className="flexContainerContact">
        <div>
          <img src={contactRegion} alt="Location" className="item" />
          <h5>Copenhagen, Denmark</h5>
        </div>
        <div>
          <img src={contactPhone} alt="Phone Number" className="item" />
          <h5>+45 000 00000</h5>
        </div>
        <div>
          <img src={contactEmail} alt="email" className="item" />
          <h5>email@address.com</h5>
        </div>
        <div>
          <img src={contactTimings} alt="openingTimes" className="item" />
          <h5>Mon - Fri 8:00 AM to 6:00 PM</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactpageContainer;
