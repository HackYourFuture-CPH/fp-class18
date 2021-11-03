import React from 'react';
import './Menu.styles.css';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';

export const Menu = () => {
  return (
    <menu>
      <header>
        <div className="logo_container">
          <div className="user-icon">
            <div className="dropdown">
              <img src={faUser} alt="login" />

              <div id="login" className="dropdown-content">
                <a href="login">LOGIN / SIGNUP</a>
              </div>
            </div>
          </div>
          <div className="icons">
            <img src={faHeart} alt="favorite" />
          </div>
          <div className="icons">
            <img src={faShoppingCart} alt="shoppingcart" />
          </div>
        </div>
        <div className="navbar">
          <div className="dropdown">
            <button type="submit" className="dropbtn">
              CATEGORIES
            </button>

            <div className="dropdown-content">
              <a href="furniture">FURNITURE</a>
              <a href="lamps">LAMPS </a>
              <a href="homedecor">HOME DECOR</a>
              <a href="linen">LINEN</a>
            </div>
          </div>
          <a href="monthlyarrivals">MONTHLY ARIVALS</a>
          <a href="about">ABOUT</a>
          <a href="contactus">CONTACT US</a>
        </div>
      </header>
    </menu>
  );
};
