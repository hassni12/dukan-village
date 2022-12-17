import React, { Component, useEffect } from "react";
const Store = () => {
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
              <h1>Pick-up From Company Address</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="default p-100 return">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h5>VillageDukaan Store:</h5>
                      <p>We like our customers to visit us at our office address <a href="https://g.page/VillageDukaan?share" target="_blank" className="pink"> #2-54-6, Shambu Nagar, 4th Street, Rajahmundry-533103, A.P.</a>, and pick up thier orders which are placed through our website, however that functionality is not included in the site as of now and we are trying hard to provide you the functionality soon, so that people who live very close to our company address to take advanatage of the offers.</p>
                      <p>If you don't want to place orders via website you can visit us to browse all products at our warehouse and pick up what you like. Picking up products from the company address will get you all our products at dicounted prices. Our customer service team will be happy to help you with your orders at the address.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};
export default Store;
