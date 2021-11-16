import React from 'react';

import { Link } from 'react-router-dom';
import './Menu.styles.css';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';

export const Menu = ({ isAuthenticated }) => {
  return (
    <nav>
      <header>
        <div className="logo_container">
          <div className="user-icon">
            <div className="dropdown">
              <img src={faUser} alt="logout" />
              <div id="login" className="dropdown-content">
                {isAuthenticated ? (
                  <Link className="text-link" to="/logout">
                    LOGOUT
                  </Link>
                ) : (
                  <Link className="text-link" to="/login">
                    LOGIN / SIGNUP
                  </Link>
                )}
              </div>
            </div>
          </div>
          <img className="icons" src={faHeart} alt="favorite" />
          <img className="icons" src={faShoppingCart} alt="shoppingcart" />
        </div>
        <div className="navbar">
          <div className="dropdown">
            <button type="submit" className="dropbtn">
              CATEGORIES
            </button>

            <div className="dropdown-content">
              <ul>
                <li>
                  <Link className="text-link" to="/furniture">
                    FURNITURE
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/lamps">
                    LAMPS
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/homedecor">
                    HOME DECOR
                  </Link>
                </li>
                <li>
                  <Link className="text-link" to="/linen">
                    LINEN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <button type="submit" className="dropbtn">
            MONTHLY ARIVALS
          </button>
          <button type="submit" className="dropbtn">
            ABOUT
          </button>
          <button type="submit" className="dropbtn">
            CONTACT US
          </button>
        </div>
      </header>
    </nav>
  );
};
