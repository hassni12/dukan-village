import React from 'react';

class My_Cart extends React.Component {
    render() {
        return (
            <div>
                <section className="inner-header-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-9 col-12">
                                <h1>My Cart</h1>
                                <h4 className="pink">Discover the unique village items!</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/*inner-header-section end here*/}
                <section className="my-cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>All Items</h3>
                            </div>
                        </div>
                        <form action>
                            <div className="row">
                                <div className="col-12 col-lg-8 table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <img src="images/product-1.png" className="img-fluid" alt="" />
                                                        <div className="media-body">
                                                            <h4>Lebanon bologna</h4>
                                                            <h6>500gm</h6>
                                                            <p><span>*</span>This product will be delivered on SUNDAY only.</p>
                                                            <p><span>*</span>This product will be delivered tomorrow between 7 to 9 PM </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h3>$40.00</h3>
                                                </td>
                                                <td>
                                                    <div className="quantity">
                                                        <button className="plus"><i className="fa fa-minus-circle" /></button>
                                                        <input type="number" placeholder={2} />
                                                        <button className="minus"><i className="fa fa-plus-circle" /></button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between">
                                                        <h3>$40.00</h3>
                                                        <button className="delete"><i className="fa fa-trash-alt" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="media">
                                                        <img src="images/product-1.png" className="img-fluid" alt="" />
                                                        <div className="media-body">
                                                            <h4>Lebanon bologna</h4>
                                                            <h6>500gm</h6>
                                                            <p><span>*</span>This product will be delivered on SUNDAY only.</p>
                                                            <p><span>*</span>This product will be delivered tomorrow between 7 to 9 PM </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h3>$40.00</h3>
                                                </td>
                                                <td>
                                                    <div className="quantity">
                                                        <button className="plus"><i className="fa fa-minus-circle" /></button>
                                                        <input type="number" placeholder={2} />
                                                        <button className="minus"><i className="fa fa-plus-circle" /></button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between">
                                                        <h3>$40.00</h3>
                                                        <button className="delete"><i className="fa fa-trash-alt" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="cart-detail">
                                        <div className="top pink-bg">
                                            <h2>Cart Details</h2>
                                        </div>
                                        <div className="middle">
                                            <div className="media align-items-center">
                                                <img src="images/product-1.png" className="img-fluid" alt="" />
                                                <div className="media-body">
                                                    <div className="d-flex justify-content-between">
                                                        <p>Lebanon bologna</p>
                                                        <h6>$50</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media align-items-center">
                                                <img src="images/product-2.png" className="img-fluid" alt="" />
                                                <div className="media-body">
                                                    <div className="d-flex justify-content-between">
                                                        <p>All Spice Mix Veg</p>
                                                        <h6>$50</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="d-flex justify-content-between">
                                                <h5>Sub Total:</h5>
                                                <h6>$47.00</h6>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <h5>Shipping:</h5>
                                                <h6>$17.00</h6>
                                            </div>
                                            {/* for backend developer
								<a class="yel-btn-nr" href="check-out.php" type="button">Checkout</a>
							*/}
                                            <button className="yel-btn-nr" type="button" data-toggle="modal" data-target=".check-out-popup">Checkout</button>
                                            <a href="#/">Back to shop more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                {/*check-out-popup start here*/}
                <div className="modal fade review-modal check-out-popup" id tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content common-modal">
                            <div className="forget-pass ">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
                                <div className="modal-body p-0">
                                    <div className="row">
                                        <div className="col-12 ">
                                            <div className="row">
                                                <div className="col-12 text-center">
                                                    <img src="images/pre-order.png" className="img-fluid" alt="" />
                                                    <h5 className>Please Login or Register to Checkout</h5>
                                                </div>
                                            </div>
                                            <form action>
                                                <div className="form-group">
                                                    <label htmlFor>Email Address or phone number </label>
                                                    <input type="text" className="form-control" placeholder="Enter Email or Phone" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor>Enter Password</label>
                                                    <input type="email" className="form-control" placeholder="Enter Password" />
                                                </div>
                                                <p>New to Village Dukaan? <a href="register.php" className="pink">Sign Up</a>
                                                </p>
                                                <button type="submit" className="form-control pink-btn-nr" data-dismiss="modal" aria-label="Close">Login </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default My_Cart;