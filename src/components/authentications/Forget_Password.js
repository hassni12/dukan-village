import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import http from '../../config/axios';

const Forget_Password = (props) => {
    const [email , setEmail] = useState('');
    const onSendEmail = async(e) => {
        e.preventDefault();
        const params = {
            email
        }
        try {
            const { data } = await http.post("/auth/password/create" ,  params ); // for post remove btackets 
            toast.success("We sent code to your mobile, please enter the sent code.");
            props.history.push({
                pathname: '/forget_password_2',
                state: {email: email}
            });
        } catch (error) {
            toast.error("Invalid Email Address.");
        }
    }
    return (
        <section className="login-banner">
            <div className="container">
                <div className="row ">
                    <div className="col-md-8 offset-md-2 col-12 ">
                        <div className="login-main">
                            <div className="login-inner forgot-1">
                                <div className="right">
                                    <img src="images/pre-order.png" className="img-fluid" alt="" />
                                    <h1 className="text-center">Forgot Password</h1>
                                    <form onSubmit={onSendEmail}>
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter Email Address" />
                                                <i className="fa fa-envelope" /> </div>
                                        </div>
                                        <button type="sumit" className="pink-btn-nr form-control text-center"> Continue</button>
                                    </form>
                                    <NavLink to="/login" className="back form-control text-center">Back to login</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Forget_Password;