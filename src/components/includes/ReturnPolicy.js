import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom';
const ReturnPolicy = () =>
{
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
              <h1>Return Policy</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <section className="reurn default p-100">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h5>Standard Returns Policy:</h5>
                <p>If you would like to exchange or return a product purchased from our website, we do that at no extra cost for Subscribed products and the general orders which are below Rs.500 may lose their delivery charges. Please refer to our <Link to="/delivery-information" className="pink font-weight-bold">Delivery Information</Link> page for delivery charges for same day and next day delivery. Returns will be accepted only if you see a problem with our products and a return can be requested within 14 days of delivery.</p>
                <p>Refunds for the users who paid by Cash will be handed over in Cash when our agent comes and collects the products. Refunds for users who paid using our Card Reader may take upto 5 working days to return your money into your account. PhonePe and Paytm users will be paid into their account within 1 days of thier returns are accepted. Our online payment service is not active on the website, however once the service is active and we start taking payments using online services we refund your money within 1 day and it may take 14 days to show on your account depending on who you bank with.</p>
                <p>If you choose to return your item outside of the 14 day refund policy, a refund will not be offered for the returning item unless the product is faulty.</p>
                <p>VillageDukaan will provide a full refund or exchange should you receive a faulty item or be unsatisfied with an item received on the following conditions:</p>
                <p>If any items in your order prove to be faulty, please <Link to="/contact-us" className="pink font-weight-bold">Contact Us</Link> and VillageDukaan customer experience team will help you to either refund or exchange at no extra cost</p>
                <p>VillageDukaan's promise to replace the item or refund your money does not apply to faults or damages caused by accident, neglect or misuse.</p>
                <p>Please be aware that refunds for purchases made using 3rd party tender types e.g. PhonePe, Patm etc., may not be possible on the same day. If this is the case, our customer service team will advise you and keep you updated with progress.</p>
            </div>
        </div>
    </div>

      </section>
        </div>
)
}
export default ReturnPolicy;
