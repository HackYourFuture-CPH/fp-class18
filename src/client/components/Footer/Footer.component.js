import React from 'react';
import './Footer.styles.css';

export const Footer = () => {
  return (
    <footer>
      <div className="column">
        <h3>Company</h3>
        <ul>
          <li>
            <span>About us</span>
          </li>
          <li>
            <span>FAQ</span>
          </li>
          <li>
            <span>Contact us</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Resources</h3>
        <ul>
          <li>
            <span>Help center</span>
          </li>
          <li>
            <span>Term of service</span>
          </li>
          <li>
            <span>Legal</span>
          </li>
          <li>
            <span>GDPR</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
