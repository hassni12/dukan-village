import React, { useState, useEffect } from 'react';
import http from '../../config/axios';
import { Link } from 'react-router-dom';

const Order_Details = (props) => {
    const [order, setOrder] = useState({});
    const [delivery, setDelivery] = useState({})

    const onViewOrder = async () => {
        const { data } = await http.get(`/account/orders/${props.match.params.id}?updated=true`);
        setOrder(data.order);
        setDelivery(data.delivery_detail);
    }
    useEffect(() => {
        window.console.log('we are here')
        window.scrollTo(0, 0)
        onViewOrder();
    }, []);
    return (
        <div>
            <section className="inner-header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-9 col-12">
                            <h1>Order Details</h1>
                            <h4 className="pink">Discover the unique village items!</h4>
                        </div>
                    </div>
                </div>
            </section>
            {/*inner-header-section end here*/}
            {/*order-detail start here*/}
            <section className="order-details p-70">
                <div className="container">
                    <div className="order-detail">
                        <div className="row">
                            <div className="col-12">
                                <h3>Order Details </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="box pink-bg">
                                    <div className="media alig-items-center">
                                        <div className="media-body">
                                            <p>Order Number</p>
                                            <h6>#{order.order_detail && order.order_detail.order_id}</h6>
                                        </div>
                                        <i className="fas fa-hashtag" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="box yel-bg">
                                    <div className="media alig-items-center">
                                        <div className="media-body">
                                            <p>Order Date</p>
                                            <h6>{order.created_at}</h6>
                                        </div>
                                        <i className="fa fa-calendar-alt" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 col-lg-3">
                                <div className="box white-bg">
                                    <div className="media alig-items-center">
                                        <div className="media-body">
                                            <p>Status</p>
                                            <h6>{order.status}</h6>
                                        </div>
                                        <i className="fa fa-rocket" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {delivery && <div className="order-delivery">
                        <div className="row">
                            <div className="col-12">
                                <h6>Order Delivery</h6>
                            </div>
                        </div>
                        <div className="row">
                            {delivery.type === 1 ? <>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i className="far fa-user-circle" />
                                        <div className="media-body">
                                            <p>Delivery Guy: </p>
                                            <h5>{delivery.name}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i className="fa fa-phone fa-rotate-90" />
                                        <div className="media-body">
                                            <p>Phone:</p>
                                            <h5>{delivery.phone}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i className="fa fa-calendar" />
                                        <div className="media-body">
                                            <p>Expected Delivery Time:</p>
                                            <h5>{delivery.expected_date}</h5>
                                        </div>
                                    </div>
                                </div>
                            </> : null}
                            {delivery.type === 2 ? <>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i class="fa fa-thumb-tack" aria-hidden="true"></i>
                                        <div className="media-body">
                                            <p>Tracking ID:</p>
                                            <h5>{delivery.track_id ? delivery.track_id : 'N/A'}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i className="far fa-user-circle" />
                                        <div className="media-body">
                                            <p>Courier:</p>
                                            <h5>{delivery.name ? delivery.name : 'N/A'}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                    <i class="fa fa-link" aria-hidden="true"></i>
                                        <div className="media-body">
                                            <p>URL:</p>
                                            <h5><a href={delivery.url}>{delivery.url ? delivery.url : 'N/A'}</a></h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-3 col-md-4 col-sm-6">
                                    <div className="media align-items-center">
                                        <i className="fa fa-calendar" />
                                        <div className="media-body">
                                            <p>Expected Delivery Time:</p>
                                            <h5>{delivery.expected_date}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                                : null}
                        </div>
                    </div>
                    }
                    <div className="contact-detail">
                        <div className="row">
                            <div className="col-12">
                                <h6>Contact Details</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-12 d-flex justify-content-between">
                                <div className="left">
                                    <div className="media align-items-center">
                                        <i className="fa fa-phone-square fa-rotate-90" />
                                        <div className="media-body">
                                            <p>Phone: </p>
                                            <h5>{order.customer_phone}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <a href="https://wa.me/9493888842"><img src={`${process.env.PUBLIC_URL}/images/wt.png`} className="img-fluid" alt="" /></a>
                                    <a href="mailto:support@villagedukaan.com"><img src={`${process.env.PUBLIC_URL}/images/email.png`} className="img-fluid" alt="" /></a>
                                    <a href="tel:0883-2431098"><img src={`${process.env.PUBLIC_URL}/images/phone.png`} className="img-fluid" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-bottom">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h6 className="yel">Billing Address</h6>
                                <p>Address</p>
                                <h5>{order.billing_address_1}</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <p>City </p>
                                        <h5>{order.billing_city}</h5>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p>Zipcode</p>
                                        <h5>{order.billing_zip}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <p>State </p>
                                        <h5>{order.billing_state}</h5>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p>Country</p>
                                        <h5>{order.billing_country}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <h6 className="yel">Shipping Address</h6>
                                <p>Address</p>
                                <h5>{order.shipping_address_1}</h5>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <p>City </p>
                                        <h5>{order.shipping_city}</h5>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p>Zipcode</p>
                                        <h5>{order.shipping_zip}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        <p>State </p>
                                        <h5>{order.shipping_state}</h5>
                                    </div>
                                    <div className="col-lg-6 col-12">
                                        <p>Country</p>
                                        <h5>{order.shipping_country}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-cart summary">
                        <div className="row">
                            <div className="col-12">
                                <h6>Summary </h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {order.products && order.products.map(product => (
                                            <Link to={`/products/${product.product.slug}?updated=true`}>
                                                <tr>
                                                    <td>
                                                        <div className="media">
                                                            {/* <img src={`${process.env.PUBLIC_URL}/images/product-1.png`} className="img-fluid" alt="" /> */}
                                                            <img src={product.product.files[0].path} className="img-fluid" alt="" />
                                                            <div className="media-body">
                                                                <h4>{product.product.name}</h4>
                                                                <h6>{product.option_value}</h6>
                                                                {!!product.product.detail.sunday_only ?
                                                                    <p><span>*</span>This product will be delivered on SUNDAY only.</p>
                                                                    : null}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h3>{product.unit_price && product.unit_price.formatted}</h3>
                                                    </td>
                                                </tr>
                                            </Link>
                                        ))}


                                    </tbody>
                                </table>
                                <table className="border-top">
                                </table><table className="inner-table" style={{ float: 'right', width: '300px', borderCollapse: 'collapse' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '0 0 0 20px' }}><p>Sub Total:</p> </td>
                                            <td style={{ padding: '0 0 0 20px', textAlign: 'right' }}><h6>{order.sub_total && order.sub_total.formatted}</h6> </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0 0 0 20px' }}><p>Shipping</p></td>
                                            <td style={{ padding: '0 0 0 20px', textAlign: 'right' }}><h6>{order.shipping_cost && order.shipping_cost.formatted}</h6> </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0 0 0 20px' }}><p>Service</p></td>
                                            <td style={{ padding: '0 0 0 20px', textAlign: 'right' }}><h6>{order.order_detail && order.order_detail.service_charges}</h6> </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0 0 0 20px' }}><p>GST </p></td>
                                            <td style={{ padding: '0 0 0 20px', textAlign: 'right' }}><h6>{order.order_detail && order.order_detail.tax_amount}</h6> </td>
                                        </tr>
                                        <tr>
                                            <td style={{ padding: '0 0 0 20px' }}><h5>Total:</h5></td>
                                            <td style={{ padding: '0 0 0 20px', textAlign: 'right' }}><h4>{order.total && order.total.formatted}</h4> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );

}

export default Order_Details;