import React from 'react';

class Check_out extends React.Component {
    render() {
        return (
            <div>
                <section className="inner-header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <h1>Checkout</h1>
                                <h4 className="pink">Discover the unique village items!</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/*inner-header-section end here*/}
                {/*check out start here*/}
                <section className="check-out p-70">
                    <div className="container">
                        <form id="regForm" className="regform-1" action encType="multipart/form-data">
                            <div className="tab">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Shipping Details </h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-8">
                                        <div className="left">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6 className="yel">Contact Details</h6>
                                                    <div className="row">
                                                        <div className="col-12 col-md-10 form-group">
                                                            <label htmlFor>Email</label>
                                                            <p className="mt-2 email">email@address.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 col-md-10 form-group">
                                                            <label htmlFor>Phone Number</label>
                                                            <input type="number" className="form-control" placeholder="000-000-0000" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="billing">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h6 className="yel">Billing Address</h6>
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        {/* <label className="login-check">Use existing shipping address <input type="checkbox" defaultChecked="checked" /><span className="checkmark" /></label> */}
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label htmlFor>Address</label>
                                                        <input type="text" className="form-control" placeholder="Enter Address" />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>City </label>
                                                        <select name id className="form-control">
                                                            <option value>Select City</option>
                                                            <option value>Select City</option>
                                                            <option value>Select City</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>Zipcode</label>
                                                        <input type="text" className="form-control" placeholder="Enter Zip Code" />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>State</label>
                                                        <select name id className="form-control">
                                                            <option value>Select state</option>
                                                            <option value>Select state</option>
                                                            <option value>Select state</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>Country</label>
                                                        <select name id className="form-control">
                                                            <option value>Select country</option>
                                                            <option value>Select country</option>
                                                            <option value>Select country</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shipping">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h6 className="yel">Shipping Address</h6>
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        {/* <label className="login-check">Use existing Billing address <input type="checkbox" defaultChecked="checked" /><span className="checkmark" /></label> */}
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label htmlFor>Address</label>
                                                        <input type="text" className="form-control" placeholder="Enter Address" />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>City </label>
                                                        <select name id className="form-control">
                                                            <option value>Select City</option>
                                                            <option value>Select City</option>
                                                            <option value>Select City</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>Zipcode</label>
                                                        <input type="text" className="form-control" placeholder="Enter Zip Code" />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>State</label>
                                                        <select name id className="form-control">
                                                            <option value>Select state</option>
                                                            <option value>Select state</option>
                                                            <option value>Select state</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <label htmlFor>Country</label>
                                                        <select name id className="form-control">
                                                            <option value>Select country</option>
                                                            <option value>Select country</option>
                                                            <option value>Select country</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="cart-detail">
                                            <div className="top pink-bg d-flex justify-content-between">
                                                <h2>Cart Details</h2>
                                                <a href="#/"><i className="fa fa-edit" /></a>
                                            </div>
                                            <div className="middle">
                                                <div className="media align-items-center">
                                                    <img src="images/product-1.png" className="img-fluid" alt="" />
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <p>Lebanon bologna</p>
                                                            <h6 className="yel">$50</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center">
                                                    <img src="images/product-2.png" className="img-fluid" alt="" />
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <p>All Spice Mix Veg</p>
                                                            <h6 className="yel">$50</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="d-flex justify-content-between">
                                                    <h5>Sub Total:</h5>
                                                    <h6 className="yel">$47.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Shipping:</h5>
                                                    <h6 className="yel">$17.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Service Charges:</h5>
                                                    <h6 className="yel">$30.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>GST 18%:</h5>
                                                    <h6 className="yel">$20.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between border-top">
                                                    <h5 className="pink">Total</h5>
                                                    <h6 className="pink">$120.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab tab-2">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Payment</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-8">
                                        <div className="left">
                                            <div className="row">
                                                <div className="col-12">
                                                    <h6 className="yel">Add Credit Card Details</h6>
                                                    <div className="row">
                                                        <div className="col-12 col-md-10 form-group">
                                                            <div className="sort-ban">
                                                                <label className="ban">Credit Card
                                  <input spellCheck="true" type="radio" defaultChecked="checked" name="radio" />
                                                                    <span className="checkmark" /></label>
                                                                <label className="ban">Cash On Delivery
                                  <input spellCheck="true" type="radio" defaultChecked="checked" name="radio" />
                                                                    <span className="checkmark" /></label>
                                                                <label className="ban"><img src="images/ro.png" className="img-fluid" alt="" />
                                                                    <input spellCheck="true" type="radio" defaultChecked="checked" name="radio" />
                                                                    <span className="checkmark" /></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="credit-info">
                                                <div className="row">
                                                    <div className="col-12 d-flex justify-content-between align-items-center">
                                                        <h4>Credit Card Information </h4>
                                                        <img src="images/visa-1.png" className="img-fluid" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="billing card-info">
                                                <div className="row">
                                                    <div className="col-12 form-group">
                                                        <label htmlFor>Card Number <span className="pink">*</span></label>
                                                        <input type="number" className="form-control" placeholder="Enter your card number" />
                                                    </div>
                                                    <div className="col-12 form-group position-relative">
                                                        <label htmlFor>Card Holder Name <span className="pink">*</span> </label>
                                                        <input type="number" className="form-control" placeholder="Enter Name" />
                                                        <img src="images/visa-2.png" className="img-fluid position-absolute" alt="" />
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group">
                                                        <label htmlFor>Expiry Date  <span className="pink">*</span></label>
                                                        <select name id className="form-control">
                                                            <option value>MM</option>
                                                            <option value>MM</option>
                                                            <option value>MM</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group mt-4">
                                                        <select name id className="form-control">
                                                            <option value>YY</option>
                                                            <option value>YY</option>
                                                            <option value>YY</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-12 col-md-4 form-group">
                                                        <label htmlFor>CVV  <span className="pink">*</span></label>
                                                        <input type="number" className="form-control" placeholder="-" />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <label className="login-check">I have read and accept the terms of use, rules of flight and privacy policy<input type="checkbox" defaultChecked="checked" /><span className="checkmark" /></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4">
                                        <div className="cart-detail">
                                            <div className="top pink-bg d-flex justify-content-between">
                                                <h2>Cart Details</h2>
                                                <a href="#/"><i className="fa fa-edit" /></a>
                                            </div>
                                            <div className="middle">
                                                <div className="media align-items-center">
                                                    <img src="images/product-1.png" className="img-fluid" alt="" />
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <p>Lebanon bologna</p>
                                                            <h6 className="yel">$50</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center">
                                                    <img src="images/product-2.png" className="img-fluid" alt="" />
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <p>All Spice Mix Veg</p>
                                                            <h6 className="yel">$50</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <div className="d-flex justify-content-between">
                                                    <h5>Sub Total:</h5>
                                                    <h6 className="yel">$47.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Shipping:</h5>
                                                    <h6 className="yel">$17.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>Service Charges:</h5>
                                                    <h6 className="yel">$30.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <h5>GST 18%:</h5>
                                                    <h6 className="yel">$20.00</h6>
                                                </div>
                                                <div className="d-flex justify-content-between border-top">
                                                    <h5 className="pink">Total</h5>
                                                    <h6 className="pink">$120.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ overflow: 'auto' }}>
                                <div className="buttons">
                                    <button type="button" id="nextBtn" className="pink-btn-nr" onclick="nextPrev(1, event)">Next</button>
                                    {/*							<button type="button" class="prevBtn pink-btn-nr" onclick="nextPrev(-1, event)">Back</button>*/}
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

export default Check_out;