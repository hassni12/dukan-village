import React, { Component, useEffect } from "react";
import { Link } from "react-router-dom";
const ServiceChargesPolicy = () => {
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
              <h1>Service Charges Explained</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="default p-100 service-charges">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>1. Restaurant Service Charges (Rajahmundry only)</h5>
              <p>
                We charge Rs. 25 for each Restaurant you add to the cart. The
                illustration on how we charge is shown for you below
              </p>
              <p className="yel">
                1 item from Srikanya Comfort is added to Cart
              </p>
              <p>
                Service Charge: <span className="pink">Rs. 25</span>
              </p>
              <p className="yel">
                10 items from Srikanya Comfort are added to Cart
              </p>
              <p>
                The service charge will still be:{" "}
                <span className="pink">Rs. 25</span>
              </p>
              <h5>
                1.2 Items from two diferent Restaurant are in Cart(eg: Srikanya
                Comfort and J.K. Classic)
              </h5>
              <p className="yel">
                1 item from Srikanya Comfort is added to Cart
              </p>
              <p>
                Service Charge: <span className="pink">Rs. 25</span>
              </p>
              <p className="yel">1 item from J.K. Classic is added to Cart</p>
              <p>
                Service Charge of : Rs. 25 will be added to the above:{" "}
                <span className="pink">Rs. 25</span> and a total{" "}
                <span className="pink">Rs. 50</span> will be charged
              </p>
              <p className="yel">
                Now 10 items from Srikanya Comfort are added to Cart
              </p>
              <p className="yel">
                And another 10 items from J.K. Classic are added to Cart
              </p>
              <p>
                The service charge will still be:{" "}
                <span className="pink">Rs. 50</span>
              </p>
              <h5>1.3. Why do we charge the above way?</h5>
              <p>
                We had to charge the way explained above, as we have to collect
                the products from each Restuarant along with the other items,
                eg: groceries, you ordered from our site. This requires lot of
                man work and also the distance between the restaurants and the
                wait times at each restaurant incurs more charges. Hence we had
                to charge you individually for each restaurant.
              </p>
              <h5>1.4. Maximum Service Charge</h5>
              <p>
                There is a max limit to, how much of service charge a customer
                pays for our service. The max limit is set to{" "}
                <span className="pink">Rs. 100</span>
              </p>
              <Link to="/" className="yel-btn-nr">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ServiceChargesPolicy;
