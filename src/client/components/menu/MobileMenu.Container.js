import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.style.css';
import './Menu.styles.css';
const MobileMenu = () => {
  return (
    <div className="hamburger">
      <div className="burger burger1"></div>
      <div className="burger burger2"></div>
      <div className="burger burger3"></div>
    </div>
  );
};
export default MobileMenu;
