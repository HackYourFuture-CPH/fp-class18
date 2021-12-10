import React from 'react';
import { Link } from 'react-router-dom';
import './404Page.Style.css';

const Page404Container = () => {
  return (
    <>
      <section className="page404">
        <div className="pageBg">
          <h1>404: NOT FOUND</h1>
        </div>

        <div className="pageDetails">
          <h3>Looks like... you are lost</h3>

          <p>the page you are looking for is not available!</p>

          <Link to="/" className="link404">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page404Container;
