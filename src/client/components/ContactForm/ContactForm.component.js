import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.styles.css';

export default function ContactForm({user}) {
    return (
        <div className="infoBox">
            <div className="wrapper">
                <form className="form">
                    <label className="title">CONTACT:</label>
                    <label className="fullName">Full-name:  {
                        user.fullName
                    }</label>
                    <label className="email">e-mail address:  {
                        user.email
                    }</label>
                    <span className="formPaddingBottom"/>
                </form>
            </div>
        </div>
    );
}

ContactForm.defaultProps = {
    user: {
        fullName: "",
        email: ""
    }
};

ContactForm.propTypes = {
    user: PropTypes.shape(
        {fullName: PropTypes.string, email: PropTypes.string}
    )
};
