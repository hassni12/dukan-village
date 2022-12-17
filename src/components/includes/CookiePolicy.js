import React, { Component, useEffect } from "react";
const CookiePolicy = () => {
  useEffect( () => {
    window.scrollTo(0,0);
  },[]);
  return (
    <div className="">
      {/*inner-header-section start here*/}
      <section className="inner-header-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9 col-12">
              <h1>Cookie Policy</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="default p-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>What are Cookies:</h5>
              <p>
                Cookies are small files which are stored on a user's computer.
                They are designed to hold a modest amount of data specific to a
                particular client and website, and can be accessed either by the
                web server or the client computer. This allows the server to
                deliver a page tailored to a particular user, or the page itself
                can contain some script which is aware of the data in the cookie
                and so is able to carry information from one visit to the
                website (or related site) to the next.
              </p>
              <p>
                www.villagedukaan.com requires the use of some cookies to enable
                certain site functionality to work. Without cookies you will not
                be able to place your order or experience the site properly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CookiePolicy;
