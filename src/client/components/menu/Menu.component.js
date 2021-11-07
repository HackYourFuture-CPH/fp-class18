import React from 'react';
//import { Link } from 'react-router-native';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Menu.styles.css';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';

export const Menu = ({ isUserAuthenticated }) => {
  return (
    <menu>
      <header>
        <BrowserRouter>
          <div className="logo_container">
            <div className="user-icon">
              <div className="dropdown">
                <img src={faUser} alt="login" />

                <div id="login" className="dropdown-content">
                  <Link className="text-link" to="/login">
                    LOGIN / SIGNUP
                  </Link>
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
        </BrowserRouter>
      </header>
    </menu>
  );
};
export const MenuLogin = () => {
  return (
    <menu>
      <header>
        <BrowserRouter>
          <div className="logo_container">
            <div className="user-icon">
              <div className="dropdown">
                <img src={faUser} alt="login" />

                <div id="login" className="dropdown-content">
                  <Link className="text-link" className="text-link" to="/login">
                    LOGOUT
                  </Link>
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
        </BrowserRouter>
      </header>
    </menu>
  );
};
