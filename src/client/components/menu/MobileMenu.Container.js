import React from 'react';
import { Link } from 'react-router-dom';
const MobileMenu = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button type="submit" className="dropbtn">
          CATEGORIES
        </button>

        <div className="dropdown-content">
          <ul>
            <li>
              <Link className="text-link" to="/category/furniture">
                FURNITURE
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/category/lamps">
                LAMPS
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/category/home decor">
                HOME DECOR
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/category/linen">
                LINEN
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link to="/monthly-arrivals">
        <button type="submit" className="dropbtn">
          MONTHLY ARRIVALS
        </button>
      </Link>
      <button type="submit" className="dropbtn">
        ABOUT
      </button>
      <button type="submit" className="dropbtn">
        CONTACT US
      </button>
    </div>
  );
};
export default MobileMenu;
