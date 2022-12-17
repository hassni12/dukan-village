import React, { useEffect } from 'react';

const CustomerReviews = () => {
    useEffect( () => {
        window.scrollTo(0,0);
      },[]);
    return (
        <section className="customer-review">
            <div className="container">
                <div className="row ">
                    <div className="col-12 d-md-flex justify-content-between align-items-center">
                        <div>
                            <h1>Customer <br />Reviews</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="customer-box">
                            <ul className="stars">
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                            </ul>
                            <h5>All products Quality are Very Good.Well satisfied in delivery.Best place for daily needs.</h5>
                            <div className="media align-items-center">
                                <div className="media-body">
                                    <h4 className="pink">Rohit Ricky</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="customer-box m-lg-0">
                            <ul className="stars">
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                            </ul>
                            <h5>Ordered rose milk via village dukaan. The process of ordering is very simple which i did in their app and it takes just 2 steps.</h5>
                            <div className="media align-items-center">
                                
                                <div className="media-body">
                                    <h4 className="pink">Dhayamraju Siddhartha</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="customer-box ">
                            <ul className="stars">
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                                <li><i className="fa fa-star" />
                                </li>
                            </ul>
                            <h5>very good,fast service & good customer care; reasonable charges overall best delivery service in Rajahmundry.</h5>
                            <div className="media align-items-center">
                                
                                <div className="media-body">
                                    <h4 className="pink">My droid</h4>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomerReviews;