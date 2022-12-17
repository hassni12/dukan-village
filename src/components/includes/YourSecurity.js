import React, { Component, useEffect } from 'react'
const YourSecurity = () =>{
  useEffect( () => {
    window.scrollTo(0,0);
  },[]);
    return(
        <div className="">
              {/*inner-header-section start here*/}
      <section className="inner-header-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-9 col-12">
              <h1>Your Security</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      
      {/* content start here */}
        <section className="default security p-100">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                      <h5>Your Security</h5>
                        <p>VillageDukaan will always treat all of your personal information as confidential.To help us provide the best possible service, we may collect and maintain certain information regarding, for example, the products you purchase, and your billing and delivery information. However, we protect and enforce the confidentiality of this information very strictly, and under no circumstances will we sell or rent it to other businesses or third parties.</p>
                        <p>When using www.villagedukaan.com, there are situations in which we will collect, store and use personal information. These situations include:</p>
                        <ul>
                          <li>When Subscribing to our products</li>
                          <li>Placing orders for Home Delivery or Pick-up from company address</li> 
                        </ul>
                        <p>The Information we collect from you are:</p>
                        <ul>
                          <li>Full Name</li>
                          <li>Email</li>
                          <li>Phone</li>
                          <li>Password while registering for VillageDukaan</li>
                          <li>Billing Information</li>
                          <li>Payment Information once our online payments are active</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

      {/* content end here */}
        </div>
    )
}
export default YourSecurity;