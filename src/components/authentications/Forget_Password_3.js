import React, { useState, useEffect } from 'react';
import { NavLink , withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import http from '../../config/axios';

const Forget_Password_3 = (props) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [rePassword , setRepassword] = useState('');
    const [pass_show , setPassShow] = useState(false);
    const [con_pass_show , setConPassShow] = useState(false);
    // const [error , setError] = useState({});
    
    const onResetPassword = async(e) => {
        e.preventDefault();
        const params = {
            email , 
                password,
                password_confirmation: rePassword
        }
        try {
            const { data } = await http.post("/auth/password/reset" ,  
                params
            );
            props.history.push('/login');
            toast.success("Your password has been reset successfully.");
        } catch (error) {
            error.response.data.errors && Object.values(error.response.data.errors).map((error, index) => {
                toast.error(error[index]);
            });
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
                            <div className="login-inner forgot-3">
                                <div className="right">
                                    <img src="images/pre-order.png" className="img-fluid" alt="" />
                                    <h1 className="text-center">Forgot Password</h1>
                                    <form onSubmit={onResetPassword}>
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <input value={password} onChange={e => setPassword(e.target.value)} type={ pass_show ? "text" : "password"} className="form-control" placeholder="Enter Password" />
                                                <i className="fa fa-lock" />
                                                <button onClick={() => setPassShow(!pass_show)} className="icon" type="button"><i className="fa fa-eye" /></button>
                                            </div>
                                            <div className="col-12 form-group">
                                                <input value={rePassword} onChange={e => setRepassword(e.target.value)} type={ con_pass_show ? "text" : "password"} className="form-control" placeholder="Re-type Password" />
                                                <i className="fa fa-lock" />
                                                <button onClick={() => setConPassShow(!con_pass_show)} className="icon" type="button"><i className="fa fa-eye" /></button>
                                            </div>
                                        </div>
                                        <button type="submit" className="pink-btn-nr form-control text-center"> update <i className="fa fa-angle-right" /></button>
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

export default withRouter(Forget_Password_3);