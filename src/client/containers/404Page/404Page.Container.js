import React from 'react';
import './404Page.Style.css';

const Page404Container = () => {
  return (
    <>
      <section className="page_404">
        <div className="page_bg">
          <h1>404: NOT FOUND</h1>
        </div>

        <div className="page_deatails">
          <h3>Look like you are lost</h3>

          <p>the page you are looking for not available!</p>

          <a href="/" className="link_404">
            Go to Home
          </a>
        </div>
      </section>
    </>
  );
};

export default Page404Container;
