import React, { Component, useEffect } from "react";
const TermsOfUsingWebsite = () => {
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
              <h1>terms of using website</h1>
              <h4 className="pink">Discover the unique village items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="default p-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                The terms and conditions for use of VillageDukaan website are
                detailed below and should be read carefully. We may vary these
                terms from time to time and therefore you should check them
                before you place new Orders or Subscriptions.
              </p>
              <h5>Shopping Online:</h5>
              <p>
                We have taken care in presenting all our VillageDukaan products
                on our website as accurately as possible . The product images
                that you will see depend on your monitor's display and colour
                capabilities, hence we are unable to guarantee that the product
                images you see are an accurate representation of the actual
                purchased products. Before you place an order you should read
                the Delivery Information and Returns Policy.
              </p>
              <h5>Customer Support:</h5>
              Our customer support team will be delighted to help place orders
              for you over the telephone, advise you on the range of products we
              offer on our website.
              <p>
                Our customer support team can be contacted on 0883-2431098
                during the following times:
              </p>
              <p>Monday-Saturday: <span className="pink">9am - 6pm</span></p>
              <p className="yel ">Sunday: Closed</p>
              <p>Festival Seasons: <span className="pink">9am - 4pm</span></p>
              <h5>Contact Details:</h5>
              <p>Please ensure the email address provided to VillageDukaan are accurate as our primary method of communication with you is by email. All your order and despatch confirmations will be sent to the email address you provide. If we have a problem with your order or need to speak to you before delivering products to your home, we will contact you by telephone. Again, please ensure the contact telephone numbers you provide are accurate.</p>
              <h5>Availability:</h5>
              <p>All products and/or services displayed on VillageDukaan website are subject to availability. Prices of products may change from time to time. We confirm availability and price at the time your order is placed. If a product is unavailable when we come to despatch your order, we will contact you either by phone or email.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TermsOfUsingWebsite;
