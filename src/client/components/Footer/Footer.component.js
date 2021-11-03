import React from "react";
import './Footer.styles.css'

export const Footer = () => {

    return <footer>
        <div className='footer'>
            <div className="column">
                <h3>Company</h3>
                <ul>
                    <li>About us</li>
                    <li>FAQ</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className="column">
                <h3>Resources</h3>
                <ul>
                    <li>Help center</li>
                    <li>Term of service</li>
                    <li>Legal</li>
                    <li>GDPR</li>
                </ul>
            </div>
        </div>
    </footer>
}