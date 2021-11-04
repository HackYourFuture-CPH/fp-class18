import React from "react";
import './Footer.styles.css'

export const Footer = () => {
    return <footer>
        <div className="column">
            <h3>Company</h3>
            <ul>
                <li><a>About us</a></li>
                <li><a>FAQ</a></li>
                <li><a>Contact us</a></li>
                <li><a>Pricing</a></li>
            </ul>
        </div>
        <div className="column">
            <h3>Resources</h3>
            <ul>
                <li><a>Help center</a></li>
                <li><a>Term of service</a></li>
                <li><a>Legal</a></li>
                <li><a>GDPR</a></li>
            </ul>
        </div>
    </footer>
}