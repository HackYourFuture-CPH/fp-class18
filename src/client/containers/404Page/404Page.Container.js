import React from 'react';
import './404Page.Style.css';

const Page404Container = () => {
  return (
    <>
      <section className="page_404">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404: NOT FOUND</h1>
        </div>

        <div className="contant_box_404">
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
