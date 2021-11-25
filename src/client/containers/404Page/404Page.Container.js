import React from 'react';
import { Link } from 'react-router-dom';
import './404Page.Style.css';

const Page404Container = () => {
  return (
    <>
      <section className="page_404">
        <div className="page_bg">
          <h1>404: NOT FOUND</h1>
        </div>

        <div className="page_deatails">
          <h3>Looks like... you are lost</h3>

          <p>the page you are looking for is not available!</p>

          <Link to="/" className="link_404">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page404Container;
