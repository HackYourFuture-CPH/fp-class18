import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';

export default function ContactForm({ fullName, email }) {
  return (
    <div className="infoBox">
      <div className="wrapper">
        <form className="form">
          <label className="title">CONTACT:</label>
          {fullName && (
            <label className="fullName">Full-name: {fullName}</label>
          )}
          {email && <label className="email">e-mail address: {email}</label>}
        </form>
      </div>
    </div>
  );
}

ContactForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
