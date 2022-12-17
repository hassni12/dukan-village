import React, { useState, useContext, useEffect } from 'react';
import { NavLink, withRouter, Redirect } from 'react-router-dom';
import http from '../../config/axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Login = (props) => {
    
    const auth = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('password');

    useEffect(() => {
        window.scrollTo(0, 0);
    },[]);

    const onSubmit = (e) => {

        http.post("/auth/login?updated=true", { email, password })
            .then(({ data }) => {
               // console.log('current Token', data.token);
                http.setToken(data.token);
                // axios.defaults.headers.common['Authorization'] = 'Bearer '+data.token;
                localStorage.setItem("access_token", data.token);
                auth.onLoggedIn(data, true);

                setTimeout(() => {
                    props.history.push({ pathname: '/' });
                    window.location.reload();
                }, 1000);

            })
            .catch(error => {
                // toast.error("Invalid Credentials");
                if(error.response && error.response.data.message && error.response.data.message !==  "The given data was invalid."){
                    toast.error("Invalid Credentials");
                    return;
                }
                error.response && error.response.data.errors && Object.values(error.response.data.errors).map((error, index) => {
                    toast.error(error[index]);
                });
            });
    }

    if (auth.isAuthenticated) {
        return <Redirect to={{ pathname: '/' }} />
    } else {
        return (
            <section className="login-banner">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-8 offset-md-2 col-12 ">
                            <div className="login-main">
                                <div className="login-inner">
                                    <div className="right">
                                        <img src="images/pre-order.png" className="img-fluid" alt="" />
                                        <h1>Login</h1>
                                        <h6>Login Your Account</h6>
                                        <form>
                                            <div className="row">
                                                <div className="col-12 form-group">
                                                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Email Address" />
                                                    <i className="fa fa-envelope" /> </div>
                                                <div className="col-12 form-group">
                                                    <input type={type} value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                                                    <i className="fa fa-lock" />
                                                    <button onClick={() => { type === 'password' ? setType('text') : setType('password') }} className="icon" type="button"><i className="fa fa-eye" /></button>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <label className="login-check">Remember Me<input type="checkbox" /><span className="checkmark" /></label>
                                                </div>
                                                <div> <NavLink to="/forget_password" className="forgot"> Forgot Password?</NavLink> </div>
                                            </div>
                                            <button type="button" onClick={onSubmit} className="pink-btn-nr form-control text-center"> login <i className="fa fa-angle-right" /></button>
                                        </form>
                                        <p className="text-center">- Not a member? Register Now -</p>
                                        <NavLink to="/register" className="yel-btn-nr form-control text-center">register  <i className="fa fa-angle-right" /></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Login);