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
              <img src={faUser} />

              <div id="login" className="dropdown-content">
                <a>LOGIN / SIGNUP</a>
              </div>
            </div>
          </div>
          <div className="icons">
            <img src={faHeart} />
          </div>
          <div className="icons">
            <img src={faShoppingCart} />
          </div>
        </div>
        <div class="navbar">
          <div className="dropdown">
            <button className="dropbtn">CATEGORIES</button>

            <div className="dropdown-content">
              <a>FURNITURE</a>
              <a>LAMPS </a>
              <a>HOME DECOR</a>
              <a>LINEN</a>
            </div>
          </div>
          <a>MONTHLY ARIVALS</a>
          <a>ABOUT</a>
          <a>CONTACT US</a>
        </div>
      </header>
    </menu>
  );
};
