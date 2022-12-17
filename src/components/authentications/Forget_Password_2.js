import React, { useState, useEffect } from 'react';
import { NavLink , withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import http from '../../config/axios';

const Forget_Password_2 = (props) => {
    const [code , setCode] = useState('');
    const [email , setEmail] = useState('');
    const onResetPassword = async(e) => {
        e.preventDefault();
        const params = {
            email , code
        }
        try {
            const { data } = await http.post("/auth/password/verify" ,  params );
            props.history.push({
                pathname: '/forget_password_3',
                state: {email: email}
            });
        } catch (error) {
            toast.error("Invalid Email Address.");
        }
    }
    useEffect( () => {
        setEmail(props.location.state && props.location.state.email);
    },[]);
    return (
        <section className="login-banner">
            <div className="container">
                <div className="row ">
                    <div className="col-md-8 offset-md-2 col-12 ">
                        <div className="login-main">
                            <div className="login-inner forgot-2">
                                <div className="right">
                                    <img src="images/pre-order.png" className="img-fluid" alt="" />
                                    <h1 className="text-center">Forgot Password</h1>
                                    <form onSubmit={onResetPassword}>
                                        <div className="row">
                                            <div className="col-12">
                                                <label>enter code</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <input type="number" value={code} onChange={e => setCode(e.target.value)} className="form-control" required={true} placeholder="Enter Verification Code" />
                                                <i className="fa fa-check-circle" /> </div>
                                        </div>
                                        <button type="submit" className="pink-btn-nr form-control text-center"> Continue</button>
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

export default withRouter(Forget_Password_2);