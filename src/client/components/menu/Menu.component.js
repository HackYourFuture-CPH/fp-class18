import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.styles.css';
import faUser from '../../assets/images/user-login.png';
import faHeart from '../../assets/images/favorite-icon.png';
import faShoppingCart from '../../assets/images/shopping-cart.png';
import { useFirebase } from '../../firebase/FirebaseContext';

export const Menu = ({ isAuthenticated }) => {
  const { signInWithGoogle, signOut, auth } = useFirebase();

  const handleLogin = async () => {
    await signInWithGoogle();
    window.location.href = '/';
  };

  const handleLogout = async () => {
    await signOut();
    window.location.href = '/';
  };

  // function getIdIfPresent() {
  //   return localStorage.getItem('user')
  //     ? JSON.parse(localStorage.getItem('user')).uid
  //     : isAuthenticated && `${auth.currentUser.uid}`;
  // }
  React.useEffect(() => {
    document.querySelector('.nav-links').addEventListener('click', function () {
      document.getElementById('nav-check').checked = !document.getElementById(
        'nav-check',
      ).checked;
    });
  }, []);

  return (
    <nav>
      <header>
        <div className="logo_container">
          <div className="user-icon">
            <div className="dropdown">
              <div className="name-div">
                <img src={faUser} alt="logout" />
                <span className="name-span">
                  {isAuthenticated && `${auth.currentUser.displayName}`}
                </span>
              </div>
              <div id="login" className="dropdown-content">
                {isAuthenticated ? (
                  <div>
                    <Link className="text-link" to="/profile">
                      <button className="acc-btn" type="submit">
                        MY ACCOUNT
                      </button>
                    </Link>
                    <button
                      type="submit"
                      className="login-btn"
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </button>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="login-btn"
                    onClick={handleLogin}
                  >
                    LOGIN / SIGNUP
                  </button>
                )}
              </div>
            </div>
          </div>
          <Link to="/favorites">
            <img className="icons" src={faHeart} alt="favorite" />
          </Link>
          <Link to="/cart">
            <img className="icons" src={faShoppingCart} alt="shoppingcart" />
          </Link>
        </div>
        <div className="navbar">
          <input type="checkbox" id="nav-check" />
          <div className="nav-btn">
            <label htmlFor="nav-check">
              <span />
              <span />
              <span />
            </label>
          </div>
          <div className="nav-links">
            <div className="dropdown">
              <button type="submit" className="dropbtn">
                CATEGORIES
              </button>
              <div className="dropdown-content">
                <ul>
                  <li>
                    <Link
                      className="text-link text-link2"
                      to="/category/furniture"
                    >
                      FURNITURE
                    </Link>
                  </li>
                  <li>
                    <Link className="text-link text-link2" to="/category/lamps">
                      LAMPS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-link text-link2"
                      to="/category/home decor"
                    >
                      HOME DECOR
                    </Link>
                  </li>
                  <li>
                    <Link className="text-link text-link2" to="/category/linen">
                      LINEN
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/monthly-arrivals" className="text-link2">
              <button type="submit" className="dropbtn">
                MONTHLY ARRIVALS
              </button>
            </Link>
            <Link to="/about-us" className="text-link2">
              <button type="submit" className="dropbtn">
                ABOUT
              </button>
            </Link>
            <Link to="/contact-us" className="text-link2">
              <button type="submit" className="dropbtn">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </header>
    </nav>
  );
};
