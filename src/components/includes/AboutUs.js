import React, { Component, useEffect } from "react";
import CustomerReviews from "./CustomerReviews";
import ProductSuggestion from "./ProductSuggestion";
import OwlCarousel from "react-owl-carousel";

const AboutUs = () => {
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
              <h1>About Us</h1>
              <h4 className="pink">Discover the unique village items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="about-us default p-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5>Our Story</h5>
              <p>
                VillageDukaan which is trading under Vaishnavi VillageDukaan
                E-Commerce Private Limited is a startup opened in November 2017.
                We started selling products at the company address from 2nd May
                2018 and the website is going live now to our customers in and
                around Rajahmundry. We are launching in Rajahmundry to test the
                whole idea and eventually launch our services to other major
                cities/towns of Andhra Pradesh
              </p>
              <p>
                Our goal is to connect farmers to our customers living in
                cities, which in turn will help our local communities to grow.
                We want to support local farmers by giving them the best price
                while buying the products from them and then sell them to
                customers by adding small margin to the price to meet our
                operational costs. This will also help our customers get
                products for a better price, thus reducing their monthly costs
                on their daily products
              </p>
            </div>
          </div>
          <OwlCarousel
            items={1}
            className="owl-carousel"
            loop={true}
            autoplay={true}
            dots={true}
          >
            <div className="item">
              <div className="box">
                <h5>Village Story #1:</h5>
                <h6>Story of a Farmer who produces Thati bellam</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/1V-Ux-YF3pw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #2: Atreyapuram Farmer</h5>
                <h6>Story of a Farmer who produces Kova</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/io7_5Nlcp_c"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #3: Mission 2020</h5>
                <h6>Chapter 1</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/oAAIbz4d1C4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #4: Women Power</h5>
                <h6>
                  Four Women from Modduru started their own company. This is
                  their story
                </h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/d2hrFTfULjw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #5: SweetStroke</h5>
                <h6>Helping Farmers with the help of a Local Startup</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/MBU0PmHwhJQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="item">
              <div className="box">
                <h5>Village Story #6: Ravulapalem Pot Biryani</h5>
                <h6>Village Product</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/BDMJzmfZAao"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #7: Ravulapalem Pot Transport</h5>
                <h6>Village Product</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/QM0YYE0eeaA"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #8: Amma Avvakaya</h5>
                <h6>Village Product</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/iw9g2O45dzk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #9: Kandriga Kova</h5>
                <h6>Village Product</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/q3SdCkMpQXw"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #10: Hardwork!</h5>
                <h6>Putharekulu</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/iepPSJ_-9CU"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="item">
              <div className="box">
                <h5>Village Story #11: Local Communities</h5>
                <h6>Local Communities</h6>
                <iframe
                  width="100%"
                  height="475"
                  src="https://www.youtube.com/embed/CVC2jL3_ULY"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <CustomerReviews />
      <ProductSuggestion />
    </div>
  );
};
export default AboutUs;
