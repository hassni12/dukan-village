import React, { useContext, useEffect, useState } from 'react';
import { Link , useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Price from './price';

const CheckoutCard = ({ showEdit , shipping , service }) => {
    const auth = useContext(AuthContext);
    const { settings } = auth;
    const subTotal = auth.cart.reduce((total, item) => total + (item.qty *  parseFloat(item.option? item.option.price.amount: 0)), 0);
    const total = subTotal + parseInt(shipping) + parseInt(service) + parseInt(((settings.gst / 100) * (shipping + parseInt(service)) ));
    let location = useLocation();
    return (
        <div className="col-12 col-lg-4">
            <div className="cart-detail">
                <div className={showEdit ? "top pink-bg d-flex justify-content-between" : "top pink-bg"}>
                    <h2>Cart Details</h2>
                    {showEdit ? <Link to="/my-cart"><i className="fa fa-edit" /></Link> : null}
                </div>
                <div className="middle">
                    {auth.cart.map(item => (
                        <div className="media align-items-center d-sm-flex d-block d-sm-text-left" key={item.product.id}>
                            {/* <img src="images/product-1.png" className="img-fluid" alt="" /> */}
                            <div className="media-body">
                                <div className="justify-content-between align-items-center d-sm-flex d-block d-sm-text-left">
                                    <p>{item.product.name}</p>
                                    <Price option={item.option} price={item.product.price} qty={1} />
                                    {!showEdit ? <button className="delete" type="button" onClick={ () => auth.onCartItemRemoved(item.product.id) }><i className="far fa-trash-alt" /></button> :  null}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {showEdit ? <div className="bottom">
                    <div className="d-flex justify-content-between">
                    <span>Weight: {auth.cart.reduce((total , item) => total + (parseFloat(item.kg)) ,0)} Kg</span>
                        <h5>Sub Total:</h5>
                        <h6>{auth.cart.reduce((total, item) => total + (item.qty * parseFloat(item.option? item.option.price.amount: 0)), 0)}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>Shipping:</h5>
                        <h6 className="yel">{parseInt(shipping)}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>Service Charges:</h5>
                        <h6 className="yel">{service}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>GST 18%:</h5>
                        <h6 className="yel">{  ( parseInt(settings.gst) / 100 * (parseInt(shipping) + parseInt(service)) ).toFixed(1) }</h6>    
                    </div>
                    <span>For Shipping and Service Charge</span>
                    <div className="d-flex justify-content-between border-top">
                        <h5 className="pink">Total</h5>
                        <h6 className="pink">{total}</h6>
                    </div>
                    
                </div> : <div className="bottom">
                        <div className="d-flex justify-content-between">
                        <span>Weight: {auth.cart.reduce((total , item) => total + (parseFloat(item.kg)),0)} Kg</span>
                            <h5>Sub Total:</h5>
                            <h6>{auth.cart.reduce((total, item) => total + (item.qty * parseFloat(item.option? item.option.price.amount: 0)), 0)}</h6>
                        </div>
                        
                        {/* <div className="d-flex justify-content-between">
                            <h5>Shipping:</h5>
                            <h6>{shipping}</h6>
                        </div> */}
                        {
                            auth.isAuthenticated ? auth.cart.length > 0 ? 
                                    location.pathname === "/check-out" ? null : <Link className="yel-btn-nr" to="/check-out" type="button">Checkout</Link> : 
                                'Please add some products to cart' :
                                <button className="yel-btn-nr" type="button" data-toggle="modal" data-target=".check-out-popup">Checkout</button>
                        }
                        <Link to="/products">Back to shop more</Link>
                    </div>}
            </div>
        </div>

    );
}

export default CheckoutCard;