import React, { useContext , useEffect, useState } from 'react';
import http from '../config/axios';
import { AuthContext } from '../context/AuthContext';
import CheckoutCard from './mics/CheckoutCard';
import Price from './mics/price';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const MyCart = (props) => {
    const cart = useContext(AuthContext);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const increseQty = async (item) => {
        
        const qty = parseInt(item.qty) + 1;
        let gram = parseInt(item.option.label.match(/(\d+)/)) * parseInt(qty);
        let kg = gram / 1000;
        cart.onCartItemAdded({
            product: item.product,
            option: item.option,
            qty,
            kg:kg,
            delivery_time: item.delivery_time 
        });
    }

    const decreseQty = async (item) => {
        
        const qty = parseInt(item.qty) - 1;

        if(qty < 1) return;
        let gram = parseInt(item.option.label.match(/(\d+)/)) * parseInt(qty);
        let kg = gram / 1000;
        cart.onCartItemAdded({
            product: item.product,
            option: item.option,
            qty,
            kg: kg,
            delivery_time: item.delivery_time
        });
    }
    const onLogin = () => {
        http.post("/auth/login", { email: loginEmail, password: loginPassword })
            .then(({ data }) => {

                localStorage.setItem("access_token", data.token);
                
                cart.onLoggedIn(data, true);
                window.$('.review-modal.check-out-popup').modal('hide');
                setTimeout(() => {
                    props.history.push({ pathname: '/check-out' });
                }, 100);

            })
            .catch(err => {
                toast.error("Invalid Credentials");
            });
    }

    const cartItems  = cart.cart;
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
                    <form>
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
                                        {cartItems.map(item => {
                                            
                                            const baseImage = item.product.files.filter(file => file.pivot && file.pivot.zone === 'base_image')
                                            let imagePath ;
                                            if(baseImage && baseImage.length > 0){
                                                imagePath = baseImage.shift().path;
                                            }else{
                                                imagePath = `${process.env.PUBLIC_URL}/images/product-1.png`;
                                            }
                                            return (<tr key={item.product.id}>
                                                <td>
                                                    <div className="media">
                                                        <img src={imagePath} className="img-fluid" alt="" />
                                                        <div className="media-body">
                                                            <h4>{item.product.name}</h4>
                                                            
                                                            {item.option? <h6>{item.option.label}</h6>: null}
                                                            
                                                            {!!item.product.detail.sunday_only? 
                                                            <p><span>*</span>This product will be delivered on SUNDAY only.</p>
                                                            : null}
                                                            {/* <p><span>*</span>This product will be delivered tomorrow between 7 to 9 PM </p> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Price option={item.option} price={item.product.price} qty={1} />
                                                </td>
                                                <td>
                                                    <div className="quantity">
                                                        <button type="button" className="plus" onClick={() => decreseQty(item)}>
                                                            <i className="fa fa-minus-circle" />
                                                        </button>
                                                        <input type="number" value={item.qty} readOnly placeholder={item.qty} />
                                                        <button type="button" className="minus" onClick={() => increseQty(item)}>
                                                            <i className="fa fa-plus-circle" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex justify-content-between">
                                                        <Price option={item.option} price={item.product.price} qty={item.qty} />
                                                        <button className="delete" type="button" onClick={ () => cart.onCartItemRemoved(item.product.id) }><i className="far fa-trash-alt" /></button>
                                                    </div>
                                                </td>
                                            </tr>)
    })}
                                    </tbody>
                                </table>
                            </div>
                            <CheckoutCard showEdit={false} />
                       </div>
                    </form>
                </div>
            </section>
            {/*check-out-popup start here*/}
            <div className="modal fade review-modal check-out-popup" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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
                                                <h5>Please Login or Register to Checkout</h5>
                                            </div>
                                        </div>
                                        <form  >
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value) } className="form-control" placeholder="Enter Email or Phone" />
                                            </div>
                                            <div className="form-group">
                                                <label>Enter Password</label>
                                                <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value) } className="form-control" placeholder="Enter Password" />
                                            </div>
                                            <p>New to Village Dukaan? <Link to="/register" className="pink">Sign Up</Link>
                                            </p>
                                            <button type="button" onClick={onLogin} className="form-control pink-btn-nr" aria-label="Close">Login </button>
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

export default MyCart;

