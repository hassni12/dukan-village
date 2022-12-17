import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
const DeliveryInformation = () =>{
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
              <h1>Delivery Information</h1>
              <h4 className="pink">Discover the Unique Village Items!</h4>
            </div>
          </div>
        </div>
      </section>
      {/*inner-header-section end here*/}
      <div className="default deliver-info p-100 service-charges"> 
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h5 className="pink">VillageDukaan Delivery Charges:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="table-responsive">
              <table className="table">
                <thead>
              <tr>
                <th>City<span>|</span>Town<span>|</span>Village</th>
                <th>Delivery Cost</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kovvur</td>
                  <td>₹25.00</td>
                </tr>
                <tr>
                  <td>Rajanagaram</td>
                  <td>₹35.00</td>
                </tr>
                <tr>
                  <td>Kaddiyam</td>
                  <td>₹25.00</td>
                </tr>
                <tr>
                  <td>Niddadavolu</td>
                  <td>₹45.00</td>
                </tr>
                <tr>
                  <td>Bommuru</td>
                  <td>₹10.00</td>
                </tr>
                <tr>
                  <td>U.K.</td>
                  <td>₹3,500.00</td>
                </tr>
                <tr>
                  <td>Konthamuru</td>
                  <td>₹25.00</td>
                </tr>
                <tr>
                  <td>Tadepalligudem</td>
                  <td>₹70.00</td>
                </tr>
              </tbody>
              </table>
            </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <div className="table-responsive">
              <table className="table">
                <thead>
              <tr>
                <th>City<span>|</span>Town<span>|</span>Village</th>
                <th>Delivery Cost</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tallapudi</td>
                  <td>₹60.00</td>
                </tr>
                <tr>
                  <td>Tanuku</td>
                  <td>₹75.00</td>
                </tr>
                <tr>
                  <td>Kakinada</td>
                  <td>₹50.00</td>
                </tr>
                <tr>
                  <td>Atreyapuram</td>
                  <td>₹25.00</td>
                </tr>
                <tr>
                  <td>Chagallu</td>
                  <td>₹75.00</td>
                </tr>
                <tr>
                  <td>Rajamahendravaram</td>
                  <td>₹15.00</td>
                </tr>
                <tr>
                  <td>Kesavaram</td>
                  <td>₹25.00</td>
                </tr> 
              </tbody>
              </table>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mt-4">
              <p>We use a trackable delivery service and in most cases, a signature will be required on delivery. Why? Because we know your order is important to you. We won't deliver to your next door neighbour if you're out and we won't leave it near your door either. To keep your order safe we'll deliver to your delivery address only. If you are not home please let us know.</p>
              <p>The delivery estimates displayed below and on product pages exclude bank holidays and festival seasons. There could be delays during bank holidays and festival seasons</p>
              <h6>Bank Holiday/Festival Season Deliveries:</h6>
              <p>During Bank Holiday/Festival Season periods we operate delivery services however, only for half day and all the deliveries received on the day may not be delivered same day, so we would ask that you allow extra time for delivery when placing your order around Bank Holidays/Festival Seasons. Our normal delivery services resume the next working day onwards. We apologise for any inconvenience this may cause.</p>
              <h6>Delivery Delays:</h6>
              <p>We always endeavour to deliver your item on time. In exceptional circumstances such as adverse weather, or severe road network issues we may experience delays. We politely point out that in such circumstances, we do not take responsibility for any impact such delays may have.</p>
              <Link to="/" className="pink-btn-nr">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default DeliveryInformation;