import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';

export default function ContactForm({ fullName, email }) {
  return (
    <div className="wrapperContact">
      <form className="formContact">
        <label className="titleContact">CONTACT:</label>
        {fullName && <label className="fullName">Full-name: {fullName}</label>}
        {email && (
          <label className="email paddingParent">e-mail address: {email}</label>
        )}
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
